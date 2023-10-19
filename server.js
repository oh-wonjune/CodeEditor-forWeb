const express = require('express');
const webpack = require('webpack');
const fs = require('fs');
const config = require('./webpack.config.js');

const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/bundle', (req, res) => {
    const tempFilePath = './temp-code.js';

    // 보안: 코드 길이 제한
    if (req.body.code.length > 10000) {
        return res.status(400).send('Code is too long');
    }

    // 사용자로부터 받은 코드를 임시 파일에 저장
    fs.writeFileSync(tempFilePath, req.body.code);

    // Webpack을 사용하여 번들링
    webpack(config, (err, stats) => {
        // 임시 파일 삭제
        fs.unlinkSync(tempFilePath);

        if (err) {
            console.error(err);
            return res.status(500).send('Error during bundling');
        }

        const bundlePath = './dist/bundle.js';
        if (fs.existsSync(bundlePath)) {
            const bundle = fs.readFileSync(bundlePath, 'utf-8');
            res.send(bundle);
        } else {
            res.status(500).send('Bundling failed');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
