

const soldier = {
name: 'Ali',  
health: 10,
weapon:{
    name: 'M4',
    cartridges: 30,
},
supplies: 3,

fire: function () {
    this.cartridges.weapon -1
  
    if(this.weapon.cartridges === 0){
        console.log('обойма пуста Перезарядитесь')
    }
    return console.log('бах-бах ')
    },

recharge: function (){
    this.weapon.cartridges === 30 && this.supplies -1

    if(this.supplies === 0){
        console.log('Не осталось припасов')
    }
    return console.log('Перезарядка')
},
hurt:() =>{
    this.health - 1

    if(this.health === 0){
      
    }
    return console.log('Ты проиграл')

},







}
soldier.hurt()



