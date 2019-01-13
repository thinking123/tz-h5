module.exports = {

    presets: [
        ["@babel/env", {
            "targets": {
                "esmodules": false
            },
            "useBuiltIns": "entry"
        }]
    ]
}
