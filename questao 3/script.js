document.addEventListener('DOMContentLoaded', () => {
    const novaTarefaInput = document.getElementById('nova-tarefa');
    const adicionarTarefaBtn = document.getElementById('adicionar-tarefa');
    const listaTarefas = document.getElementById('lista-tarefas');

    const tarefasSalvas = JSON.parse(localStorage.getItem('tarefas')) || [];
    tarefasSalvas.forEach(tarefa => {
        adicionarTarefa(tarefa.texto, tarefa.concluida);
    });


    adicionarTarefaBtn.addEventListener('click', () => {
        const textoTarefa = novaTarefaInput.value.trim();
        if (textoTarefa !== '') {
            adicionarTarefa(textoTarefa);
            salvarTarefas();
            novaTarefaInput.value = '';
        }
    });


    function adicionarTarefa(texto, concluida = false) {
        const li = document.createElement('li');
        li.textContent = texto;


        if (concluida) {
            li.classList.add('concluida');
        }


        const concluirBtn = document.createElement('button');
        concluirBtn.textContent = 'Concluir';
        concluirBtn.addEventListener('click', () => {
            li.classList.toggle('concluida');
            salvarTarefas();
        });


        const excluirBtn = document.createElement('button');
        excluirBtn.textContent = 'Excluir';
        excluirBtn.addEventListener('click', () => {
            listaTarefas.removeChild(li);
            salvarTarefas();
        });


        li.appendChild(concluirBtn);
        li.appendChild(excluirBtn);
        listaTarefas.appendChild(li);
    }


    function salvarTarefas() {
        const tarefas = [];
        document.querySelectorAll('li').forEach(li => {
            tarefas.push({
                texto: li.firstChild.textContent,
                concluida: li.classList.contains('concluida')
            });
        });
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
    }
});
