#!/usr/bin/env ruby
# -*- coding: utf-8 -*-

require 'active_support/core_ext'
require 'open-uri'

url = "http://statdb.nstac.go.jp/api/1.0b/app/getStatsData?appId=xxxxxxxxxxxx&statsDataId=0003013276&cdArea=09003,22004&cdCat01=010920070&cdTimeFrom=2012000101&cdTimeTo=2013000303"

hash = Hash.from_xml open(url).read
json = hash.to_json

puts json
