# ==========================================================================
# Project:   Sprouttrailers
# Copyright: @2012 My Company, Inc.
# ==========================================================================

# This is your Buildfile, which sets build settings for your project.
# For example, this tells SproutCore's build tools that EVERYTHING
# requires the SproutCore framework.
config :all, :required => [:sproutcore,"sproutcore/media"]

# In addition to this Buildfile, which gives settings for your entire project,
# each of your apps has its own Buildfile with settings specific to that app.

proxy '/just_added', :to =>'trailers.apple.com' , :url => '/trailers/home/feeds/just_added.json'
proxy '/most_pop', :to =>'trailers.apple.com' , :url => '/trailers/home/feeds/most_pop.json'
proxy '/exclusive', :to =>'trailers.apple.com' , :url => '/trailers/home/feeds/exclusive.json'

proxy '/', :to =>'api.rottentomatoes.com' , :url => '/api/public/v1.0/lists/'
