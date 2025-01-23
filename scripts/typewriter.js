<script>
  AFRAME.registerComponent('typewriter', {
    schema: {
      text: { type: 'string', default: '' }, // Текст для печати
      speed: { type: 'number', default: 50 } // Скорость печати (мс на символ)
    },
    init: function () {
      this.currentIndex = 0; // Текущий индекс печатаемого символа
      this.textElement = this.el; // Ссылка на элемент <a-text>
      this.printText(); // Запуск печати
    },
    printText: function () {
      const textToPrint = this.data.text;
      const speed = this.data.speed;
      
      if (this.currentIndex < textToPrint.length) {
        // Добавляем по одному символу
        this.textElement.setAttribute('value', textToPrint.substring(0, this.currentIndex + 1));
        this.currentIndex++;
        
        // Рекурсивный вызов для следующего символа
        setTimeout(() => this.printText(), speed);
      }
    }
  });

  
 function showMessage(currentMsgId, nextMsgId) {
  // Удаляем текущее сообщение, если оно существует
  if (currentMsgId) {
    const currentMsg = document.getElementById(currentMsgId);
    if (currentMsg) currentMsg.remove();
  }

  // Показываем следующее сообщение, если оно указано
  if (nextMsgId) {
    const nextMsg = document.getElementById(nextMsgId);
    if (nextMsg) {
      nextMsg.setAttribute('visible', 'true');

      // Активируем эффект печати для текста
      const speechElement = nextMsg.querySelector('#speech');
      if (speechElement) {
        const text = speechElement.getAttribute('value');
        speechElement.setAttribute('typewriter', { text: text, speed: 50 });
      }
    }
  }
}
</script>