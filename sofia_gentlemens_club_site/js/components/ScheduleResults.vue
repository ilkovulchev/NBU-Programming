<template src="./../../html/components/ScheduleResults.html"></template>

<script>

	export default {
		data: function() {
			return {
        id: 0,
        scheduleObject: {
          events: {},
        },
			};
		},
    created() {

      for (var i = 0; i < 8; i++) {

        this.id = i;

        if (typeof this.scheduleObject.events['event_' + this.id] == 'undefined') {

          this.scheduleObject.events['event_' + this.id] = {};

        }

        if (typeof this.scheduleObject.events['event_' + this.id] != 'undefined') {

          this.scheduleObject.events['event_' + this.id]['match_info'] = {};
          this.scheduleObject.events['event_' + this.id]['match_info']['start_time'] = '';
          this.scheduleObject.events['event_' + this.id]['match_info']['finished'] = '';
          this.scheduleObject.events['event_' + this.id]['match_info']['venue'] = 'зала Триадица';
          this.scheduleObject.events['event_' + this.id]['match_info']['referees'] = {};
          this.scheduleObject.events['event_' + this.id]['match_info']['referees'][0] = '';
          this.scheduleObject.events['event_' + this.id]['match_info']['referees'][1] = '';
          this.scheduleObject.events['event_' + this.id]['match_info']['referees'][2] = '';
          this.scheduleObject.events['event_' + this.id]['match_info']['comisioner'] = '';
          this.scheduleObject.events['event_' + this.id]['match_info']['stats'] = '';

          this.scheduleObject.events['event_' + this.id]['home_team'] = {};
          this.scheduleObject.events['event_' + this.id]['home_team']['name'] = '';
          this.scheduleObject.events['event_' + this.id]['home_team']['result'] = 0;


          this.scheduleObject.events['event_' + this.id]['away_team'] = {};
          this.scheduleObject.events['event_' + this.id]['away_team']['name'] = '';
          this.scheduleObject.events['event_' + this.id]['away_team']['result'] = 0;

        }

      }

      this.scheduleObject.events['event_0']['match_info']['start_time'] = '04.10.2017 / 20:15';
      this.scheduleObject.events['event_0']['match_info']['referees'][0] = 'Ангел Иванов Иванов';
      this.scheduleObject.events['event_0']['match_info']['referees'][1] = 'Димитър Васков Мановски';
      this.scheduleObject.events['event_0']['match_info']['referees'][2] = 'Георги Венелинов Брестнички';
      this.scheduleObject.events['event_0']['match_info']['comisioner'] = 'Божидар Севдалинов Йорданов';

      this.scheduleObject.events['event_0']['home_team']['name'] = 'БГО Софтуер Булс';
      this.scheduleObject.events['event_0']['home_team']['result'] = 78;

      this.scheduleObject.events['event_0']['away_team']['name'] = 'София Джентълмен\'с Клуб';
      this.scheduleObject.events['event_0']['away_team']['result'] = 50;

      this.scheduleObject.events['event_0']['match_info']['stats'] = 'http://nbla.basketball.bg/boxscore.php?id=14715';


      this.scheduleObject.events['event_1']['match_info']['start_time'] = '09.10.2017 / 20:15';
      this.scheduleObject.events['event_1']['match_info']['referees'][0] = 'Татяна Йорданова Михайлова-Вълчева';
      this.scheduleObject.events['event_1']['match_info']['referees'][1] = 'Димитър Васков Мановски';
      this.scheduleObject.events['event_1']['match_info']['referees'][2] = 'Валентин Димитров Въчковски';
      this.scheduleObject.events['event_1']['match_info']['comisioner'] = 'Александра Стефанова Минчева';

      this.scheduleObject.events['event_1']['home_team']['name'] = 'София Джентълмен\'с Клуб';
      this.scheduleObject.events['event_1']['home_team']['result'] = 56;

      this.scheduleObject.events['event_1']['away_team']['name'] = 'Перестройка Запад';
      this.scheduleObject.events['event_1']['away_team']['result'] = 55;

      this.scheduleObject.events['event_1']['match_info']['stats'] = 'http://nbla.basketball.bg/boxscore.php?id=14724';


      this.scheduleObject.events['event_2']['match_info']['start_time'] = '21.10.2017 / 17:30';
      this.scheduleObject.events['event_2']['match_info']['referees'][0] = 'Орлин Мирчев Николов';
      this.scheduleObject.events['event_2']['match_info']['referees'][1] = 'Николай Сашев Цинцарски';
      this.scheduleObject.events['event_2']['match_info']['referees'][2] = 'Божидар Севдалинов Йорданов';

      this.scheduleObject.events['event_2']['home_team']['name'] = 'Пирин Ийгълс';
      this.scheduleObject.events['event_2']['home_team']['result'] = 80;

      this.scheduleObject.events['event_2']['away_team']['name'] = 'София Джентълмен\'с Клуб';
      this.scheduleObject.events['event_2']['away_team']['result'] = 61;

      this.scheduleObject.events['event_2']['match_info']['stats'] = 'http://nbla.basketball.bg/boxscore.php?id=14770';

      this.scheduleObject.events['event_3']['match_info']['start_time'] = '26.10.2017 / 20:15';
      this.scheduleObject.events['event_3']['match_info']['referees'][0] = 'Иван Мирославов Маринов';
      this.scheduleObject.events['event_3']['match_info']['referees'][1] = 'Николай Николаев Гайтанджиев';
      this.scheduleObject.events['event_3']['match_info']['referees'][2] = 'Валентин Димитров Въчковски';
      this.scheduleObject.events['event_3']['match_info']['comisioner'] = 'Александра Стефанова Минчева';

      this.scheduleObject.events['event_3']['home_team']['name'] = 'София Джентълмен\'с Клуб';
      this.scheduleObject.events['event_3']['home_team']['result'] = 56;

      this.scheduleObject.events['event_3']['away_team']['name'] = 'Шампион 2014';
      this.scheduleObject.events['event_3']['away_team']['result'] = 69;

      this.scheduleObject.events['event_3']['match_info']['stats'] = 'http://nbla.basketball.bg/boxscore.php?id=14772';

      this.scheduleObject.events['event_4']['match_info']['start_time'] = '30.10.2017 / 20:15';
      this.scheduleObject.events['event_4']['match_info']['referees'][0] = 'Радослав Сийков Дяков';
      this.scheduleObject.events['event_4']['match_info']['referees'][1] = 'Петър Христов Цачев';
      this.scheduleObject.events['event_4']['match_info']['referees'][2] = 'Валентин Димитров Въчковски';
      this.scheduleObject.events['event_4']['match_info']['comisioner'] = 'Александра Стефанова Минчева';

      this.scheduleObject.events['event_4']['home_team']['name'] = 'Монстарс';
      this.scheduleObject.events['event_4']['home_team']['result'] = 72;

      this.scheduleObject.events['event_4']['away_team']['name'] = 'София Джентълмен\'с Клуб';
      this.scheduleObject.events['event_4']['away_team']['result'] = 64;

      this.scheduleObject.events['event_4']['match_info']['stats'] = 'http://nbla.basketball.bg/boxscore.php?id=14775';

      this.scheduleObject.events['event_5']['match_info']['start_time'] = '14.11.2017 / 22:00';
			this.scheduleObject.events['event_5']['match_info']['referees'][0] = 'Зоя Методиева Станоева';
      this.scheduleObject.events['event_5']['match_info']['referees'][1] = 'Тихомир Райков Щерев';
      this.scheduleObject.events['event_5']['match_info']['referees'][2] = 'Валентин Димитров Въчковски';
      this.scheduleObject.events['event_5']['match_info']['comisioner'] = 'Мария Кирилова Цветкова';

      this.scheduleObject.events['event_5']['home_team']['name'] = 'София Джентълмен\'с Клуб';
      this.scheduleObject.events['event_5']['home_team']['result'] = 52;

      this.scheduleObject.events['event_5']['away_team']['name'] = 'Миньор 2015';
      this.scheduleObject.events['event_5']['away_team']['result'] = 102;

      this.scheduleObject.events['event_5']['match_info']['stats'] = 'http://nbla.basketball.bg/boxscore.php?id=14783';

      this.scheduleObject.events['event_6']['match_info']['start_time'] = '23.11.2017 / 22:00';
			this.scheduleObject.events['event_6']['match_info']['referees'][0] = 'Георги Венелинов Брестнички';
      this.scheduleObject.events['event_6']['match_info']['referees'][1] = 'Иван Любомиров Методиев';
      this.scheduleObject.events['event_6']['match_info']['referees'][2] = 'Чавдар Емилов Зехиров';
      this.scheduleObject.events['event_6']['match_info']['comisioner'] = 'Румяна Павлова';

      this.scheduleObject.events['event_6']['home_team']['name'] = 'Политехника';
      this.scheduleObject.events['event_6']['home_team']['result'] = 85;

      this.scheduleObject.events['event_6']['away_team']['name'] = 'София Джентълмен\'с Клуб';
      this.scheduleObject.events['event_6']['away_team']['result'] = 42;

      this.scheduleObject.events['event_6']['match_info']['stats'] = 'http://nbla.basketball.bg/boxscore.php?id=14789';

      this.scheduleObject.events['event_7']['match_info']['start_time'] = '01.12.2017 / 20:15';

      this.scheduleObject.events['event_7']['home_team']['name'] = 'София Джентълмен\'с Клуб';
      this.scheduleObject.events['event_7']['home_team']['result'] = 0;

      this.scheduleObject.events['event_7']['away_team']['name'] = 'Инпулс';
      this.scheduleObject.events['event_7']['away_team']['result'] = 0;

      this.scheduleObject.events['event_7']['match_info']['stats'] = 'http://nbla.basketball.bg/boxscore.php?id=14793';

    },
	}
</script>
