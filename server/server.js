import App from '../src/App';
import Koa from 'koa';
import React from 'react';
import Router from 'koa-router';
import fs from 'fs';
import koaStatic from 'koa-static';
import path from 'path';
import {renderToString} from 'react-dom/server';
import { StaticRouter, Route } from "react-router-dom";
import { matchRoutes, renderRoutes } from "react-router-config";
import { Helmet } from "react-helmet";
import routes from "../src/route";
const config = {
    port :8090
}
const app  = new Koa();
app.use(
    koaStatic(path.join(__dirname,'../build'),{
        maxAge:365*24*60*1000,
        index:'root'
    })
);

let router = new Router();
router.get("/(.*)",async (ctx,next)=>{
    let shtml = '';
    await new Promise((resolve,reject)=>{
        fs.readFile(path.join(__dirname,'../build/index.html'),'utf-8',(err,data)=>{
            if(err){
                reject();
                return;
            }
            shtml = data;
            resolve();
        });
    });
      const helmet = Helmet.renderStatic();
      ctx.response.body = shtml
      .replace(
        "{{root}}",
        renderToString(
            <StaticRouter location={ctx.request.url}>
              {renderRoutes(routes)}
            </StaticRouter>
        )
      )

      .replace(
        "{{water}}",
        `<h1>渲染成功</h1>`
      )
      .replace("{{title}}", (helmet.title.toString()+'<title>爬虫来爬吧</title>'))
      .replace("{{meta}}", helmet.meta.toString());
})
app.use(router.routes());
app.listen(config.port,_=>{
    console.log(`http://127.0.0.1:${config.port}`);
})