const task = [
    {id: 1, teks: 'Hello'},
    {id: 2, teks: 'hello2'},
    {id: 3, teks: 'hello3'},
    {id: 4, teks: 'hello4'},
    {id: 5, teks: 'hello5'},
    {id: 6, teks: 'hello6'}
];

const taskStatus = {
    requested: {
        name: 'request',
        items: task
    },
    todo:{
        name: 'Todo',
        items: []
    },
    going: {
        name: 'Going',
        items:[]
    }
};

export {task, taskStatus}