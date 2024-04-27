# Acer-Battery-Health-Toggle
Toggle the Acer Battery charging threshold using acer_batter_wmi

# To install acer-battery-wmi:
For general Linux users:

````bash
git clone https://github.com/maxco2/acer-battery-wmi.git
cd acer-battery-wmi/src
make -j6
sudo make install
````

For Arch Linux users:

````
git clone https://github.com/maxco2/acer-battery-wmi-dkms.git
makepkg
sudo pacman -U acer-battery-wmi-0.1-1-x86_64.pkg.tar.zst
# reboot
````
