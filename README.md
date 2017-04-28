# Pointerana

Pointerana got his name from pointer events API. This tool helps to track cursor event at the system level. It will observe click, movement and anything you want to track and send them to a [Graphana](https://grafana.com/) instance.

## 🌍 Installation

`yarn`

## ⚙ Configuration

You need to provide few config in order to send data to a graphana server.
The first is your graphana url. The key is `graphana.url`
The second is the city you are sending data from. Default is Paris.

The setting object looks like this: 

```
{
  "graphana":{
    "url": "",
    "city": "Paris"
  }
}
```

## 👋 Usage

`yarn start`

## 📦 Dependencies

The project depends on:

- iohook: [https://github.com/WilixLead/iohook/](https://github.com/WilixLead/iohook/)
This lib is used to capture the pointer events.

- request: [https://github.com/request/request]https://github.com/request/request()
This lib allow to easily query the Graphana server

- standard-settings: [https://github.com/soixantecircuits/standard-settings](https://github.com/soixantecircuits/standard-settings)
We use this for settings management

## 🕳 Troubleshooting

This has been test on OSX(10.11.6) only for now

## ❤️ Contribute

Welcome! You've been far in the README. The first thing you can do is open an issue. Please do not be shy!
If you feel motivate, you can open an issue, create a branch and ask for a pull request.

Please follow the commit style of Soixante circuits. You can find it here: [https://github.com/soixantecircuits/standard/blob/master/commit.md](https://github.com/soixantecircuits/standard/blob/master/commit.md)

Enjoy