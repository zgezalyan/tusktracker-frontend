import React, { useEffect, useState } from 'react';

function TaskList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        // Fetch user's tasks using API request
        // Update the 'tasks' state with the response data
    }, []);

    return (
        <div>
            {tasks.map((task) => (
                <div key={task.id}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <p>Tags: {task.tags.join(', ')}</p>
                </div>
            ))}
        </div>
    );
}

export default TaskList;