#!/usr/bin/env ruby
# -*- coding: utf-8 -*-

p (1..100).select{|n| n.even?}.map{|n| n.to_s}.each{|s| p s}
