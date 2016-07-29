
module.exports = {
  findTypeId: function(type, list) {
        for (var i = 0; i < list.length; i++) {
          if (type === list[i].type) {
            return list[i].id
          }
        }
    }

}
