const focus = {
  name: 'Alex',
  lastName: 'Sitnikov',
  firstName: 'Anatolec',
  old: 37,
};

delete focus.name;
focus.name = 'Sasha';
console.log(focus.name);
