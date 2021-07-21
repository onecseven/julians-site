meetingTypes = [
  {name: 'Yoga', duration: 60},
  {name: 'Energy', duration: 50},
  {name: 'Energy', duration: 30}
];

const ENERGY = "Guided Energy Work"
const YOGA = "Yoga for Embodiment and Transformation" 

exports.meetingTypes = meetingTypes.map((type) => {
  switch(type.duration) {
    case 60: {
      type.durationStr = "(1h)"
      break
  }
    default: {
      type.durationStr = `(${type.duration}m)`
      break
    }
  }

  type.toString = (() => {
    switch (type.name) {
      case "Yoga": {
        return  `${YOGA} ${type.durationStr}`
      }
      case "Energy": {
        return `${ENERGY} ${type.durationStr}`
      }
    }
})();

return type 
})

exports.meetingTypeGenerator = ({name, duration}) => {
  switch (duration){
    case 60:
      return exports.meetingTypes[0]
    case 50:
      return exports.meetingTypes[1]
    case 30:
      return exports.meetingTypes[2]
  }
}