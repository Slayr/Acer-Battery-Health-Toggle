import GObject from 'gi://GObject';

import * as Main from 'resource:///org/gnome/shell/ui/main.js';

import {Extension, gettext as _} from 'resource:///org/gnome/shell/extensions/extension.js';
import {QuickToggle, SystemIndicator} from 'resource:///org/gnome/shell/ui/quickSettings.js';
import St from 'gi://St';
import * as Dialog from 'resource:///org/gnome/shell/ui/dialog.js';

const GLib = imports.gi.GLib;
const ExampleToggle = GObject.registerClass(
class ExampleToggle extends QuickToggle {
    constructor() {
        super({
            title: _('Health Mode Toggle'),
            iconName: 'battery-symbolic',
            toggleMode: true,
        });
    }
});

const ExampleIndicator = GObject.registerClass(
class ExampleIndicator extends SystemIndicator {
    constructor() {
        super();

        this._indicator = this._addIndicator();
        this._indicator.iconName = 'battery-symbolic';

        const toggle = new ExampleToggle();
        toggle.bind_property('checked',
            this._indicator, 'visible',
            GObject.BindingFlags.SYNC_CREATE);
        this.quickSettingsItems.push(toggle);
    }
});

export default class QuickSettingsExampleExtension extends Extension {
    enable() {
        this._indicator = new ExampleIndicator();
        Main.panel.statusArea.quickSettings.addExternalIndicator(this._indicator);
         GLib.spawn_command_line_sync('echo 0 | sudo tee /sys/module/acer_battery_wmi/drivers/platform:acer_battery_wmi/acer_battery_wmi/acer_battery/health_mode');
    }

    disable() {
        this._indicator.quickSettingsItems.forEach(item => item.destroy());
        this._indicator.destroy();
        GLib.spawn_command_line_sync('echo 1 | sudo tee /sys/module/acer_battery_wmi/drivers/platform:acer_battery_wmi/acer_battery_wmi/acer_battery/health_mode');

    }
}
