import React from 'react';
import './rules.scss';

class Rules extends React.Component {
  render() {
    return (
		    <div>
              <h2>Правила</h2>
				<p>Участники игры должны соблюдать настоящие Правила. Каждый участник игры, соблюдающий Правила, вправе рассчитывать на то, что и другие Участники будут соблюдать настоящие Правила.</p>
				<ol><li>Участие требует регистрации.</li>
					<li>Спорные вопросы решают Организаторы и являются истиной в последней инстанции.</li>
					<li>Участниками игры не могут быть лица, не достигшие 18 лет. Ответственность несут капитаны Команд и сами Участники.</li>
					<li>Ограничения на количество участвующих Команд или Участников объявляется в условиях игры.</li>
					<li>Принципы честной игры:
					<ul><li>не следить за Организаторами</li>
						<li>не искать коды до игры</li>
						<li>не сообщать коды другим игрокам</li>
						<li>не уничтожать Коды и Задания</li>
					</ul>
					</li>
				</ol>
            </div>
    )
  }
}

export default Rules;