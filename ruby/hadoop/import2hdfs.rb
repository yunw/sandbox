#!/opt/ruby/1.9.3/bin/ruby

require 'zipruby'
require 'tempfile'
require 'sysadmin'

def import2hdfs(src, dst)
  puts "Importing #{src} #{dst}"
  `hadoop fs -put #{src} #{dst}`
  puts "Done"
end

def unzip(src)
  Zip::Archive.open(src) do |a|
    a.each do |f|
      puts "Extracting #{f.name}"
      tempfile = Tempfile::new(f.name)
      tempfile.print(f.read)
      import2hdfs(tempfile.path, File.join(ARGV[1], f.name))
      tempfile.close
    end
  end
end

def run
  Dir.filelist(ARGV[0], true).each {|f|
    if f =~ /\.zip\Z/
      unzip(f)
    else
      import2hdfs(f, File.join(ARGV[1], f))
    end
  }
end

if __FILE__ == $0
  unless ARGV[1].nil?
    run
  else
    puts "Syntax: import2hdfs zipdir hadoopdir"
  end
end