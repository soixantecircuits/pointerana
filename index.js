'use strict'

const ioHook = require('iohook')
const os = require('os')
const request = require('request')
const standardSettings = require('standard-settings')
const settings = require('nconf').get()

let url = settings.graphana.url

ioHook.on('mousedown', function (msg) {console.log(msg);})

ioHook.on('keypress', function (msg) {console.log(msg);})

ioHook.on('keydown', function (msg) {console.log(msg);})

ioHook.on('keyup', function (msg) {console.log(msg);})

ioHook.on('mouseclick', function (msg) {
  console.log(msg)
  let payload = `click,city=zhengzhou,hostname=${os.hostname()},type=mouse value=1`
  request.post({
    url: url,
    body: payload
  }, function (error, response, body) {
    if (!error && response.statusCode == 204) {
      console.log(body)
    } else {
      console.error(error)
      if (response) {
        console.log(response.statusCode)
      }
    }
  })
})

ioHook.on('mousewheel', function (msg) {console.log(msg)})

ioHook.on('mousemove', function (msg) {
  console.log(msg)
  let payload = `move,city=zhengzhou,hostname=${os.hostname()},type=mouse x=${msg.x},y=${msg.y}`
  request.post({
    url: url,
    body: payload
  }, function (error, response, body) {
    if (!error && response.statusCode == 204) {
      console.log(body)
    } else {
      console.error(error)
      if (response) {
        console.log(response.statusCode)
      }
    }
  })
})

ioHook.on('mousedrag', function (msg) {console.log(msg)})

// start ioHook
ioHook.start()

console.log(`Hook started. We are sending to ${settings.graphana.url} with the city ${settings.graphana.city}.`)
