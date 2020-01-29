import React from 'react';
import { VueInReact } from "vuera";
import { VssueComponent } from "vssue";
import 'vssue/dist/vssue.css'
import GithubV3 from '@vssue/api-github-v3';
const ReactVssue = VueInReact(VssueComponent);
const vssopts = {
    api: GithubV3,
    owner: "changtimwu",
    repo: "react-vssue-demo-app",
    clientId: "4778b1b133f535edfb62",
    clientSecret: "362a569ffa5ce4d3de22d3360d4663bf5ae95394",
    autoCreateIssue: true
}

export default (props) => <ReactVssue title={props.title} options={vssopts}/>

