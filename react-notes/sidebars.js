// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  tutorialSidebar: [
    'index',
    {
      type: 'category',
      label: 'Getting-Started',
      items: [{ type: 'autogenerated', dirName: 'Getting-Started' }],
    },
    {
      type: 'category',
      label: 'Basics',
      items: [{ type: 'autogenerated', dirName: 'Basics' }],
    },
    {
      type: 'category',
      label: 'Communication',
      items: [{ type: 'autogenerated', dirName: 'Communication' }],
    },
    {
      type: 'category',
      label: 'Bootstrap',
      items: [{ type: 'autogenerated', dirName: 'Bootstrap' }],
    },
    {
      type: 'category',
      label: 'Advanced',
      items: [{ type: 'autogenerated', dirName: 'Advanced' }],
    },

  ],
};


export default sidebars;
