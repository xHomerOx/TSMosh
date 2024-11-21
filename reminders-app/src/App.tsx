import { useEffect, useState } from 'react';
import './App.css';
import ReminderList from './components/ReminderList';
import Reminder from './models/reminder';
import ReminderService from './services/reminders';
import NewReminder from './components/NewReminder';

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    loadReminders();
  }, []);

  const loadReminders = async () => {
    const reminders = await ReminderService.getReminders();
    setReminders(reminders);
  }

  const removeReminders = async (id: number) => {
    setReminders(reminders.filter(reminder => reminder.id !== id));
  }

  return (
    <div className="App">
      <NewReminder />
      <ReminderList items={reminders} onRemoveReminder={removeReminders} />
    </div>
  );
}

export default App;
