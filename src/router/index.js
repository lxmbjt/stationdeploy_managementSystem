import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import eventManagement from '../views/eventManegement.vue'
import PositionTypeManagement from '../views/PositionTypeManagement.vue'
import MissionManagement from '../views/MissionManagement.vue'
import frame from "../views/frame.vue"

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'frame',
      component: frame,
      children: [{
          path: '/eventMangement',
          name: 'eventManagement',
          component: eventManagement
        }, {
          path: '/PositionTypeManagement',
          name: 'PositionTypeManagement',
          component: PositionTypeManagement
        }, {
          path: '/MissionManagement',
          name: 'MissionManagement',
          component: MissionManagement

        },
        {
          path:'2'
        },
        {
          path:'3'
        }

      ]


    },




  ]
})
