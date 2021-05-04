# Разработка чата

## Summary

Задача данного челленджа – разработка веб-чата с возможностью поулчения/добавления сообщений и списка контактов.

Челлендж рассчитан на командную разработку (3-4 человека).

Каждый участник команды должен записывать задачи, которые он выполнял – это понадобится при составлении резюме.

Также нужно записывать все проблемы, с которыми вы столкнулись во время разработки и то, как эта проблема была решена. В конце этот список нужно скинуть наставнику.

При разбивке задач между командой нужно предусмотреть, чтобы каждый участник успел поработать с разными видами задач: проектирование, верстка, работа с компонентами и с редьюсерами.

## Releases

Прежде чем начать разработку определите тимлида своей команды.

Тимлид должен склонировать данный репозиторий и выгрузить его копию на свой профиль гитхаб. После этого остальные участники команды делают форк его репозитория и клонируют его к себе.

После этого внимательно изучите все заготовленные редьюсеры и компоненты (или папки для компонентов).

Подумайте зачем нужен каждый файл и какой код будет в нём содержаться.

Обговорите это внутри своей команды. Каждый из вас должен одинаково видеть и понимать конечную цель разработки.

Обсудите сложности, которые могут возникнуть во время разработки и способы их решения.

### Release 0. Макет

В этом релизе поработайте над внешним видом приложения. В первую очередь тимлид должен сверстать общий макет с тремя блоками, чтобы другие участники затем могли приступить к верстке своих блоков внутри макета.

Примерный внешний вид чата должен быть таким:

![](https://uc04a70f2d9f4fb33118f7f19391.previews.dropboxusercontent.com/p/thumb/ABI0vzi_J6zFNMLVuisJ1v0xUCAk1xEy9tYD1Ip1gJs5jbFfBRlElspokyQUvkvQabE5KKQtYmnnPUuCdBZtcdQeAdegcOwmOxbacenTInIRXkMAqghQsEQOLwAwcuVZHQVc9kAIEdTeUlRcnNxI42d-9_G4OTEg21xAnH-a4ZAts1xmcg1k8Mk8BAP78Uyp6mnCY720j15fMN9Tbarye3YA0VbWmz9KkdTtURVLaE1I6baM4NSB3oG6Q5kQXHSq2iQ8KOimr3YqOoOytq5E8mOpEJDS4NNDmq8zsIwA4RJQlKnAa9RX7-EHmXe58KoArYoH61Ut44lAZ6m6DrFlJ2WLpGE5_imPNikt8vpYblXymLfHaqXJkZugrH2b0W4M7TG4-f3d50IsDDlzrm7z_jdk/p.png)

⚠️ Помни, что в данном релизе готовится только внешний вид чата, а не функционал.

Постарайтесь разбить компоненты на небольшие кусочки, чтобы в дальнейшем их легче было дорабатывать.

### Release 1. Связь с сервером

Когда внешний вид чата будет готов можно переходить к получению данных с сервера.

Вам доступны следующие ресурсы на сервере `https://api.intocode.ru:8001/api`:

| Ресурс                           | Назначение                                           |
| -------------------------------- | ---------------------------------------------------- |
| GET /profile                     | Получить инфу о профиле                              |
| GET /contacts                    | Получить список контактов                            |
| GET /messages/`myId`/`contactId` | Получить список сообщений между `myId` и `contactId` |
| POST /messages                   | Добавление сообщения                                 |
| DELETE /messages/`id`            | Удалить сообщение по ID                              |

#### Ключевые моменты

➡️ Данные с роута `/profile` необходимо сохранить в редьюсер `application`.
Особое значение имеет ключ `_id` из этого профиля. Он нужен для определения направления сообщения. Если ключ `toUserId` из объекта сообщения будет совпадать с ID профиля, то значит это входящее сообщения от `fromUserId`, если наоборот, то исходящее.

➡️ Не злоупотребляй ресурсом `DELETE /messages`, т.к. сервер общий для всех работ студентов.

➡️ Пользуйся программой Postman, чтобы проверить какие ключи с какими значениями приходят с сервера.

➡️ При добавлении сообщения через `POST /messages` отправляй на сервер в теле запроса все необходимые ключи для нового сообщения.

Разбейте задачи по редьюсерам, тогда каждый участник команды будет работать над отдельной фичей проекта. Редьюсер `application` имеет минимальный функционал, поэтому разработчик, который работает с этим редьюсером может взять на себя часть задач из другого редьюсера заранее обговорив это с другими участниками.

### Release 2. Добавление роутинга

При клике на контакт должна происходить смена роутинга – в конец адреса будет добавляться id открытого контакта.

Часть приложения, которая отвечает за вывод сообщений, в свою очередь, должна отзываться на это изменение, запрашивать нужные данные у сервера и выводить полученный список сообщений.

### Release 3. Отправка сообщений

Доработайте чат таким образом, чтобы:

- после открытия чата внизу страницы должна быть форма ввода сообщения;
- справа от формы должна быть иконка микрофона;
- если в поле ввода что-то ввели иконка должна поменяться на иконку отправки;
- если поле очистили должен вернуться микрофон;
- при нажатии на иконку отправки сообщение должно отправиться на сервер;
- после добавления сообщение должно появиться в конце списка сообщений;
- должен произойти автоматический скроллинг на последнее сообщение.

### Release 4. Прочие удобства

В данном релизе добавьте несколько фичей, которые позволят пользоваться чатом более удобно:

- при открытии сообщений должен происходить скроллинг по последнего сообщения;
- должна быть форма фильтрации контактов;
- должна быть форма фильтрации сообщений;
- блок анкеты справа должен скрываться/раскрываться по нажатию на соответствующую иконку.

### Release 5. Анимации и прелоадеры

Добавьте в чат анимации, которые сделают пользование чатом не только удобным, но и красивым.

Также необходимо добавить прелоадеры для всех запросов на сервер.

### Release 6. Code refactoring

Сделайте код-ревью приложения:

- проверьте все ли функции работают как надо;
- уберите все ненужные запросы на сервер;
- консоль должен быть чистым;
- не должно быть повторяющихся участков кода;
- не должно быть неиспользуемого кода;
- соответствует ли код принятому стайл гайду?
- прописаны ли пропс-тайпы для всех компонентов?

## Заключение

Готовый проект должен быть выгружен на Хероку.
