var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.26072138453382365,
        "pitch": 0.1050798392531469,
        "fov": 0.9605991759071043
      },
      "linkHotspots": [
        {
          "yaw": -0.24952890808864048,
          "pitch": -0.18285392540351175,
          "rotation": 7.0685834705770345,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.7034404791055326,
          "pitch": 0.046955410457762525,
          "title": "Welcome!",
          "text": "Meow meow meow meow meow meow meow meow meow meow meow meow meow meow"
        }
      ]
    },
    {
      "id": "1-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.39849417193484626,
        "pitch": -0.36864693277265914,
        "fov": 0.9603500592070539
      },
      "linkHotspots": [
        {
          "yaw": 0.0754368508475789,
          "pitch": 0.01060771122134696,
          "rotation": 0,
          "target": "2-engineering-auditorium-atrium"
        },
        {
          "yaw": -1.0517141030802364,
          "pitch": 0.006313978680189791,
          "rotation": 4.71238898038469,
          "target": "0-along-engineering-drive-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.1596658361632635,
          "pitch": -0.2718680530363322,
          "title": "Sculpture",
          "text": "Meow meow meow meow meow meow meow meow meow meow meow meow meow meow"
        }
      ]
    },
    {
      "id": "2-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -1.5477983570422715,
        "pitch": -0.07435965260130573,
        "fov": 0.9603500592070539
      },
      "linkHotspots": [
        {
          "yaw": -2.7230373835099293,
          "pitch": 0.13469720440257404,
          "rotation": 5.497787143782138,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.011707594390284,
          "pitch": -0.13863994750782638,
          "title": "Coffee shop",
          "text": "Meow meow meow meow meow meow meow meow meow meow meow meow meow meow"
        }
      ]
    }
  ],
  "name": "Engineering faculty",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
