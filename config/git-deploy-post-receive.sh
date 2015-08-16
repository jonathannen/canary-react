#!/bin/bash
# (C) Copyright Jon Williams 2015 - See LICENSE file
#

unset GIT_DIR
cd ..
export NODE_ENV=production

while read oldrev newrev ref
do
    git reset --hard $newref > /dev/null
    if [ $? -ne 0 ] ; then exit -1 ; fi
done

# Echo the current version
ONELINE=`git log --oneline -n 1`
echo "Now:" $ONELINE

echo "----> Using Node in" $NODE_ENV

echo "----> Installing Modules"
NODE_ENV=development npm install
if [ $? -ne 0 ] ; then exit -1 ; fi

echo "----> Building"
npm run build

echo "----> Restarting"
npm run pm2-reload
if [ $? -ne 0 ] ; then
  echo "Reload failed, attempting a start"
  npm run pm2-start
fi

# Dir.chdir '..'
#
# current_id, next_id, ref = $stdin.read.split(' ')
# branch = ref.split('/').last
#
# system "unset GIT_DIR && git reset --hard #{next_id}"
# exit(1) unless $?.success?
#
# ENV['RACK_ENV'] = "production"
#
# at = `unset GIT_DIR && git log --oneline -n 1`.strip
# puts "Now: #{at}"
#
# env = ENV['RACK_ENV'] || 'production'
# puts "----> Using Ruby/Rack on env:#{env}"
#
# puts "----> Bundle"
# system "bundle check"
# unless $?.success?
#   system "bundle install --deployment --without development:test"
#   raise "Bundle failed" unless $?.success?
# end
#
# puts "----> Generate Assets"
# system "bundle exec rake assets:precompile RAILS_GROUPS=assets RAILS_ENV=#{env}"
# raise "Asset generation failed" unless $?.success?
#
# puts "----> Database Migrations"
# system "rake db:migrate"
# raise "Database Migrations failed" unless $?.success?
#
# puts "-----> Bounce the Application"
# system "sudo /etc/init.d/shotgun restart"
#
# exit 0
