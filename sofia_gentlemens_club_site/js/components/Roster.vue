<template src="./../../html/components/Roster.html"></template>

<script>

	export default {
		data: function() {
			return {
        roster: {},
        rosterGrouped: {
          pg: [],
          sg: [],
          sf: [],
          pf: [],
          c: [],
        },
			};
		},
    created() {

      for (var i = 0; i < 13; i++) {

        if (typeof this.roster['player_' + i] == 'undefined') {

          this.roster['player_' + i] = {};

        } else {

          this.roster['player_' + i]['position'] = '';
          this.roster['player_' + i]['position_full'] = '';
          this.roster['player_' + i]['name'] = '';
          this.roster['player_' + i]['height'] = '';
          this.roster['player_' + i]['number'] = '';
          this.roster['player_' + i]['stats'] = '';

        }
      }

      //ilko
      this.roster['player_0']['position'] = 'pg';
      this.roster['player_0']['position_full'] = 'Point Guard';
      this.roster['player_0']['name'] = 'Илко Вълчев';
      this.roster['player_0']['height'] = '180cm';
      this.roster['player_0']['number'] = '1';
      this.roster['player_0']['stats'] = 'http://nbla.basketball.bg/player.php?id=2765';

      //miro k
      this.roster['player_1']['position'] = 'sg';
      this.roster['player_1']['position_full'] = 'Shooting Guard';
      this.roster['player_1']['name'] = 'Мирослав Кетенлиев';
      this.roster['player_1']['height'] = '185cm';
      this.roster['player_1']['number'] = '11';
      this.roster['player_1']['stats'] = 'http://nbla.basketball.bg/player.php?id=16333';

      //miro m
      this.roster['player_2']['position'] = 'sf';
      this.roster['player_2']['position_full'] = 'Small Forward';
      this.roster['player_2']['name'] = 'Мирослав Митев';
      this.roster['player_2']['height'] = '184cm';
      this.roster['player_2']['number'] = '9';
      this.roster['player_2']['stats'] = 'http://nbla.basketball.bg/player.php?id=16334';

      //staikov
      this.roster['player_3']['position'] = 'c';
      this.roster['player_3']['position_full'] = 'Center';
      this.roster['player_3']['name'] = 'Иван Стайков';
      this.roster['player_3']['height'] = '190cm';
      this.roster['player_3']['number'] = '12';
      this.roster['player_3']['stats'] = 'http://nbla.basketball.bg/player.php?id=14460';

      //marto
      this.roster['player_4']['position'] = 'sg';
      this.roster['player_4']['position_full'] = 'Shooting Guard';
      this.roster['player_4']['name'] = 'Мартин Валдимиров';
      this.roster['player_4']['height'] = '183cm';
      this.roster['player_4']['number'] = '7';
      this.roster['player_4']['stats'] = 'http://nbla.basketball.bg/player.php?id=16335';

      //niki
      this.roster['player_5']['position'] = 'pf';
      this.roster['player_5']['position_full'] = 'Power Forward';
      this.roster['player_5']['name'] = 'Николай Точев';
      this.roster['player_5']['height'] = '190cm';
      this.roster['player_5']['number'] = '5';
      this.roster['player_5']['stats'] = 'http://nbla.basketball.bg/player.php?id=16337';

      //milen
      this.roster['player_6']['position'] = 'c';
      this.roster['player_6']['position_full'] = 'Center';
      this.roster['player_6']['name'] = 'Милен Петров';
      this.roster['player_6']['height'] = '210cm';
      this.roster['player_6']['number'] = '4';
      this.roster['player_6']['stats'] = 'http://nbla.basketball.bg/player.php?id=566';

      //kris
      this.roster['player_7']['position'] = 'sg';
      this.roster['player_7']['position_full'] = 'Shooting Guard';
      this.roster['player_7']['name'] = 'Кристиян Петров';
      this.roster['player_7']['height'] = '183cm';
      this.roster['player_7']['number'] = '44';
      this.roster['player_7']['stats'] = 'http://nbla.basketball.bg/player.php?id=16340';

      //nasko
      this.roster['player_8']['position'] = 'sg';
      this.roster['player_8']['position_full'] = 'Shooting Guard';
      this.roster['player_8']['name'] = 'Атанас Гюлеметов';
      this.roster['player_8']['height'] = '180cm';
      this.roster['player_8']['number'] = '3';
      this.roster['player_8']['stats'] = 'http://nbla.basketball.bg/player.php?id=16342';

      //sasho d
      this.roster['player_9']['position'] = 'sf';
      this.roster['player_9']['position_full'] = 'Small Forward';
      this.roster['player_9']['name'] = 'Александър Деведжиев';
      this.roster['player_9']['height'] = '184cm';
      this.roster['player_9']['number'] = '24';
      this.roster['player_9']['stats'] = 'http://nbla.basketball.bg/player.php?id=16339';

      //sasho q
      this.roster['player_10']['position'] = 'sg';
      this.roster['player_10']['position_full'] = 'Shooting Guard';
      this.roster['player_10']['name'] = 'Александър Янкулов';
      this.roster['player_10']['height'] = '184cm';
      this.roster['player_10']['number'] = '86';
      this.roster['player_10']['stats'] = 'http://nbla.basketball.bg/player.php?id=16341';

      //moni
      this.roster['player_11']['position'] = 'sg';
      this.roster['player_11']['position_full'] = 'Shooting Guard';
      this.roster['player_11']['name'] = 'Емануил Кетенлиев';
      this.roster['player_11']['height'] = '174cm';
      this.roster['player_11']['number'] = '73';
      this.roster['player_11']['stats'] = 'http://nbla.basketball.bg/player.php?id=16336';

      //mitko
      this.roster['player_12']['position'] = 'sf';
      this.roster['player_12']['position_full'] = 'Small Forward';
      this.roster['player_12']['name'] = 'Димитър Тарев';
      this.roster['player_12']['height'] = '190cm';
      this.roster['player_12']['number'] = '8';
      this.roster['player_12']['stats'] = 'http://nbla.basketball.bg/player.php?id=16338';


      for (var player in this.roster) {

        switch (this.roster[player].position) {
          case 'pg':
            this.rosterGrouped.pg.push(this.roster[player]);
            break;
          case 'sg':
            this.rosterGrouped.sg.push(this.roster[player]);
            break;
          case 'sf':
            this.rosterGrouped.sf.push(this.roster[player]);
            break;
          case 'pf':
            this.rosterGrouped.pf.push(this.roster[player]);
            break;
          case 'c':
            this.rosterGrouped.c.push(this.roster[player]);
            break;

          default:

        }

      }
      console.log(this.rosterGrouped);

    },
	}
</script>
