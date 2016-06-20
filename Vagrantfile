# -*- mode: ruby -*-
# vi: set ft=ruby :

# If you would like the box to build from scratch, set this var.
build_from_scratch = ENV['REBOOT_BUILD_BOX'];

# If you use SITE=wu vagrant up, magic stuff happens.
if ENV['SITE']
  site = ENV['SITE']
end

Vagrant.configure("2") do |config|

  # Pick the base box depending on an environment variable flag that indicates
  # whether to start from scratch or use a snapshot.
  current_snapshot = 'twc-2015.12.16.box'
  base_box         = 'precise64'

  # The url from where the 'config.vm.box' box will be fetched if it
  # doesn't already exist on the user's system.
  current_snapshot_url = "http://d9iruw9bp9nr8.cloudfront.net/twc-2015.12.16.box"

  base_box_url         = 'http://files.vagrantup.com/precise64.box'

  if site == 'wu'
    current_snapshot = 'wu.05.16.2016.box'
    current_snapshot_url = "https://s3.amazonaws.com/twcvagrantboxes/wu/wu.05.16.2016.box"
    base_box = 'wu.12.08.2015.box'
    base_box_url = "https://s3.amazonaws.com/mis-develop/mis-vagrant/boxes/clients/wu.12.08.2015.box"
  end

  config.vm.box     = build_from_scratch ? base_box : current_snapshot
  config.vm.box_url = build_from_scratch ? base_box_url : current_snapshot_url

  config.ssh.insert_key = false

  # For now, disable rsync. It looks like there may still be issues with it.
  use_rsync_folder = false

  # Disable box versioning (new in Vagrant 1.5), we're not using it.
  vagrant_version = `vagrant -v`.strip # Assuming output "Vagrant major.minor.patch"
  vagrant_minor_version = vagrant_version[10].to_i
  if vagrant_minor_version >= 5
    config.vm.box_check_update = false

    # If vagrant supports it AND user wants it, enable rsync.
    use_rsync_folder = ENV['USE_RSYNC']
  end


  hostname = nil

  # Configuration for the local web instance
  config.vm.define :web do |web|
    # Create a private network, which allows host-only access to the machine
    if site == 'wu'
      # WU uses a different IP so we can vagrant share without crossing the streams.
      config.vm.network :private_network, ip: "10.0.5.4"
    else
      config.vm.network :private_network, ip: "10.0.5.3"
    end

    # Web docroot
    if use_rsync_folder
      config.vm.synced_folder "docroot/", "/var/www/twc-web", owner: "www-data", group: "www-data", type: "rsync"
    else
      config.vm.synced_folder "docroot/", "/var/www/twc-web", nfs: true
    end

    # Virtual host name
    hostname = 'twcrb.dev'

    # Name of the virtual machine in VirtualBox
    #config.vm.name = "REBOOT dev"

    # Set the hostname for the box.
    config.vm.hostname = hostname

    # Chef settings
    config.vm.provision :chef_solo do |chef|
      # These paths will be expanded relative to the project directory
      chef.cookbooks_path = ["Provisioning/cookbooks/site-cookbooks"]
      chef.roles_path = "Provisioning/roles"
      chef.data_bags_path = "Provisioning/data_bags"
      #chef.log_level = "debug"

      if site == 'wu'
        role = build_from_scratch ? 'drupal_wu_from_install_profile' : 'drupal_wu_dev_from_snapshot'
      end

      chef.add_role(role)

      # Add vagrant recipe, if the command line argument specifies it.
      chef.add_recipe("twc_add_varnish") if ENV['ADD_VARNISH']


      # Merge in settings
      chef.json.merge!({
        :www_root => '/var/www/twc-web',
        :mysql    => {
          "server_root_password"    => "root",
          "server_repl_password"    => "root",
          "server_debian_password"  => "root"
        },
        :resolver => {
          "nameservers"   => ["8.8.8.8", "8.8.8.4"]
        },
        :node_hostname    => hostname,
        :install_profile  => ENV['SITE'] ? ENV['SITE'] : 'reboot'
      })
    end
$script = <<SCRIPT
service php5-fpm stop
service apache2 stop
sudo pkill -KILL -u www-data
usermod -u #{Process.uid} www-data
groupmod -g #{Process.gid} www-data
chown -R www-data:www-data /var/lib/apache2/fastcgi/
chown -R www-data:www-data /var/cache/apache2/mod_cache_disk
chown -R www-data:www-data /var/www/.ssh
service php5-fpm start
service apache2 start
SCRIPT

    config.vm.provision "shell", inline: $script unless ENV['USE_RSYNC']

  end

  # Virtualbox tweaks
  config.vm.provider :virtualbox do |vb|
    # Boot with headless mode
    vb.gui = false

    # Config hosts files both internally (vagrant-hostmaster) and externally (native vagrant)
    #config.vm.hostname = hostname
    #config.hosts.name = hostname.nil? ? "local.dev" : hostname
    #config.hosts.aliases = %W(www.#{config.hosts.name})

    #vb.customize ['storagectl', :id, '--name',      'SATA Controller', '--hostiocache', 'off']

    # Enables host DNS resolution, crucial for VPN.
    vb.customize ["modifyvm",   :id, "--natdnshostresolver1", "on"]
    vb.customize ['modifyvm',   :id, '--nic2',      'hostonly']

    vb.customize ['modifyvm',   :id, '--memory',    4096]
    vb.customize ['modifyvm',   :id, '--cpus',      2]
  end
end
