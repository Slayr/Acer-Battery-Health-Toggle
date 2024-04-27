# Acer-Battery-Health-Toggle
a GNOME 46 shell extension to toggle the Acer Battery charging threshold using acer_batter_wmi, in the quick settings panel. 
Activating the Toggle present an additional battery icon on the left indicating the ability to charge to full capacity:
![image](https://github.com/Slayr/Acer-Battery-Health-Toggle/assets/77377160/70e1d29a-f632-4269-8ec9-e0d9fe74026e)

![image](https://github.com/Slayr/Acer-Battery-Health-Toggle/assets/77377160/1ff9da3d-f7b7-4e18-b9aa-e1c18d9b58ed)


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

`battery-wmi` from:  https://github.com/maxco2/acer-battery-wmi
