const writeCards=(names,message)=>{
    let messages = [];
        for(let name in names){
            messages.push(`Thank you, ${names[name]}, for the wonderful ${message} gift!`);
        }
    return messages;
}
