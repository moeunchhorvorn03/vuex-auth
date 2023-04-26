<template>
  <div class="home">
    <Madal />
    <div v-for="blog in blogs" :key="blog.id">
      <div class="blog">
        <h3>{{ blog.title }}</h3>
        <p>{{ blog.article }}</p>
        <div class="icons">
          <span>upvote or downvote this article: </span>
          <span class="material-icons">thumb_up</span>
          <span class="material-icons">thumb_down</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Madal from '../components/madal/Madal.vue'

export default {
  components: {
    Madal
  },
  data() {
    return {
        blogs: [
        { title: 'Why Coffee is Better than Tea', id: 1, article: "Coffee beverages are also more caffeinated than tea, so they provide more of the health benefits associated with caffeine, such as making it easier to breathe by relaxing your airways (perfect for asthmatics), improved memory (perfect for students and office workers), and  constricting the blood vessels in your brain." },
        { title: '...Then I Took an Arrow in the Knee', id: 2, article: "The leadership of Bethesda Game Studios decided late in the development of The Elder Scrolls V: Skyrim that they wanted NPC's that play the role of guards to project more substantial personalities, as NPC's playing similar roles in many video games would simply grunt at player characters or convey instructions about what they are supposed to do.[1] As part of the game's main quest, players are likely to visit a place named Whiterun early in their playthrough due to its proximity with the game's starting point, where they are likely to interact with the local guards that patrol the area. According to chief game developer Todd Howard, Emil Pagliarulo was asked to write dialogue that would have the guards reflect their observations back to the player character, and to reinforce their importance as the Last Dragonborn or Dovahkiin within the in-game world of Skyrim. Howard assigned Pagliarulo for the task because of his aptitude with writing memorable." },
        { title: 'Mario vs Luigi, Ultimate Showdown', id: 3, article: "Luigi may not have the same level of charisma as Mario, he is an excellent sidekick and does everything that Mario does but without the glory." },
      ]
    }
  }

}
</script>
