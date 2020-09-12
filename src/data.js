const getRandomElement = (arr, min, max) => {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return arr[randomNumber];
};

const createData = (count = 20) => {
  const data = {
    cards: [],
    columns: []
  };
  const statusList = ['toDo', 'inProgress', 'inTesting', 'done'];
  const textList = [
    'Перед выполнением нужно внимательно прочитать документацию.',
    'авно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст..',
    'Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь.', 'Есть много надо'
  ];

  const statusToTitle = {
    toDo: 'TODO',
    inProgress: 'IN PROGRESS',
    inTesting: 'IN TESTING',
    done: 'DONE'
  };

statusList.forEach(status => {
  const column = {
    title: statusToTitle[status],
    status: status
  }
  data.columns.push(column);
 });

  for (let i = 0; i < count; i++) {
    const card = {
      date: 'Завтра в 14:00',
      title: 'Не забыть выполнить важную задачу',
      text: getRandomElement(textList, 0, textList.length - 1),
      status: getRandomElement(statusList, 0, statusList.length - 1),
      isDone: false
    }
    data.cards.push(card);
  }
  return data;
};

export default createData;