import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { NotificationSettings } from '@/types'
import { Save, Database, Bell, Users, Shield, Download } from 'lucide-react'

export default function Settings() {
  const [notifications, setNotifications] = useState<NotificationSettings>({
    email: true,
    slack: false,
    inApp: true,
    frequency: 'daily'
  })

  const [integrations, setIntegrations] = useState({
    googleSheets: false,
    sendGrid: false,
    slack: false
  })

  const handleNotificationChange = (key: keyof NotificationSettings, value: boolean | string) => {
    setNotifications(prev => ({ ...prev, [key]: value }))
  }

  const handleIntegrationChange = (key: string, value: boolean) => {
    setIntegrations(prev => ({ ...prev, [key]: value }))
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-2">Configure your Sweet Point Innovation app preferences</p>
      </div>

      {/* Data Integration Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            Data Integration
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Google Sheets Integration */}
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Database className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-medium">Google Sheets</h4>
                  <p className="text-sm text-gray-600">Import and sync innovation data from spreadsheets</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge className={integrations.googleSheets ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}>
                  {integrations.googleSheets ? 'Connected' : 'Not Connected'}
                </Badge>
                <button
                  onClick={() => handleIntegrationChange('googleSheets', !integrations.googleSheets)}
                  className={
                    integrations.googleSheets 
                      ? 'px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700' 
                      : 'px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700'
                  }
                >
                  {integrations.googleSheets ? 'Disconnect' : 'Connect'}
                </button>
              </div>
            </div>

            {/* SendGrid Integration */}
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Bell className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium">SendGrid Email</h4>
                  <p className="text-sm text-gray-600">Automated email notifications and reports</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge className={integrations.sendGrid ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}>
                  {integrations.sendGrid ? 'Connected' : 'Not Connected'}
                </Badge>
                <button
                  onClick={() => handleIntegrationChange('sendGrid', !integrations.sendGrid)}
                  className={
                    integrations.sendGrid 
                      ? 'px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700' 
                      : 'px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700'
                  }
                >
                  {integrations.sendGrid ? 'Disconnect' : 'Connect'}
                </button>
              </div>
            </div>

            {/* Slack Integration */}
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Users className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-medium">Slack</h4>
                  <p className="text-sm text-gray-600">Team collaboration and real-time notifications</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge className={integrations.slack ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}>
                  {integrations.slack ? 'Connected' : 'Not Connected'}
                </Badge>
                <button
                  onClick={() => handleIntegrationChange('slack', !integrations.slack)}
                  className={
                    integrations.slack 
                      ? 'px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700' 
                      : 'px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700'
                  }
                >
                  {integrations.slack ? 'Disconnect' : 'Connect'}
                </button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Notification Preferences
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <Bell className="h-5 w-5 text-blue-600" />
                  <span className="font-medium">Email Notifications</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={notifications.email}
                    onChange={(e) => handleNotificationChange('email', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-purple-600" />
                  <span className="font-medium">Slack Notifications</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={notifications.slack}
                    onChange={(e) => handleNotificationChange('slack', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="font-medium">In-App Notifications</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={notifications.inApp}
                    onChange={(e) => handleNotificationChange('inApp', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                </label>
              </div>
            </div>

            <div className="p-4 border rounded-lg">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Notification Frequency
              </label>
              <select
                value={notifications.frequency}
                onChange={(e) => handleNotificationChange('frequency', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="immediate">Immediate</option>
                <option value="daily">Daily Digest</option>
                <option value="weekly">Weekly Summary</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Data Export */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Download className="h-5 w-5" />
            Data Export
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-gray-600">
              Export your innovation data and analytics for external analysis or reporting.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Export to CSV
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                Export to Excel
              </button>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
                Generate PDF Report
              </button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Save Settings */}
      <div className="flex justify-end">
        <button className="inline-flex items-center px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          <Save className="h-4 w-4 mr-2" />
          Save Settings
        </button>
      </div>
    </div>
  )
}