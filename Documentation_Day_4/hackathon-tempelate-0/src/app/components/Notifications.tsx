import React, { useState, useEffect, useRef } from 'react';
import { Bell, X } from 'lucide-react';

interface Notification {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  type: 'update' | 'feature' | 'event';
}

const mockNotifications: Notification[] = [
  {
    id: "1",
    title: "Winter Furniture Collection Now Available",
    message: "Explore our new range of cozy and stylish furniture for the colder months.",
    type: "update",
    timestamp: "Just now",
    read: false,
  },
  {
    id: "2",
    title: "Free Shipping on Orders Over $500",
    message: "Enjoy free shipping on all orders over $500. Limited time offer!",
    type: "event",
    timestamp: "5 minutes ago",
    read: false,
  },
  {
    id: "3",
    title: "Get Custom Designs for Your Living Room",
    message: "Our customization options are now available for sofas, chairs, and more. Design your perfect space.",
    type: "feature",
    timestamp: "2 hours ago",
    read: false,
  },
  {
    id: "4",
    title: "Clearance Sale: Up to 40% Off",
    message: "Shop our clearance sale with up to 40% off selected furniture items. Hurry, while stocks last!",
    type: "event",
    timestamp: "1 day ago",
    read: false,
  },
  {
    id: "5",
    title: "Holiday Collection: Festive Furniture Arrivals",
    message: "Our holiday collection is here! Shop the latest festive designs to brighten up your home.",
    type: "update",
    timestamp: "3 days ago",
    read: true,
  },
];

export default function Notifications() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setNotifications(mockNotifications);

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(n =>
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const getNotificationColor = (type: Notification['type']) => {
    switch (type) {
      case 'update': return 'bg-blue-100 text-blue-800';
      case 'feature': return 'bg-purple-100 text-purple-800';
      case 'event': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getNotificationIcon = (type: Notification['type']) => {
    switch (type) {
      case 'update': return '🔄';
      case 'feature': return '✨';
      case 'event': return '📅';
      default: return '📢';
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-gray-700 hover:text-gray-900 hover:bg-amber-100 transition-colors duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-200 rounded-full"
      >
        <Bell className="h-5 w-5" />
        {unreadCount > 0 && (
          <span className="absolute -top-0 -right-0 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="fixed sm:absolute inset-x-0 sm:inset-auto top-0 sm:top-auto sm:right-0 mt-0 sm:mt-2 h-screen sm:h-auto w-full sm:w-96 bg-white shadow-lg overflow-hidden z-50">
          <div className="sticky top-0 p-4 bg-amber-100 border-b flex justify-between items-center">
            <h3 className="text-lg font-medium text-gray-900">Notifications</h3>
            <div className="flex space-x-2">
              {unreadCount > 0 && (
                <button
                  onClick={markAllAsRead}
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Mark all as read
                </button>
              )}
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="h-[calc(100vh-4rem)] sm:max-h-[calc(100vh-200px)] overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-4 text-center text-gray-500">
                No notifications
              </div>
            ) : (
              <div className="divide-y divide-gray-200">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 ${notification.read ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-50 transition-colors duration-150 ease-in-out`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="flex flex-col items-center space-y-1">
                        <span className="text-xl" role="img" aria-label={notification.type}>
                          {getNotificationIcon(notification.type)}
                        </span>
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${getNotificationColor(notification.type)}`}>
                          {notification.type}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {notification.title}
                          </p>
                        </div>
                        <p className="mt-1 text-sm text-gray-600 break-words">
                          {notification.message}
                        </p>
                        <div className="mt-2 flex items-center justify-between flex-wrap gap-2">
                          <p className="text-xs text-slate-950">
                            {notification.timestamp}
                          </p>
                          {!notification.read && (
                            <button
                              onClick={() => markAsRead(notification.id)}
                              className="text-xs text-slate-600 hover:text-slate-900 bg-amber-100 hover:bg-amber-200 px-2 py-1 rounded"
                            >
                              Mark as read
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}