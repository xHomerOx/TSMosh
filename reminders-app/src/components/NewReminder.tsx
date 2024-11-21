import React, { useState } from "react";

interface NewReminderProps {
    onAddReminders: (title: string) => void;
}

function NewReminder({ onAddReminders }: NewReminderProps): JSX.Element {
    const [title, setTitle] = useState('');
    
    const submitForm = (e: React.FormEvent) => {
        e.preventDefault();
        onAddReminders(title);
        if(!title) return;
        setTitle('');
    }

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="title"></label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" />
            <button type="submit" className="btn btn-primary my-3 rounded-pill">Add Reminder</button>
        </form>
    )
}

export default NewReminder;