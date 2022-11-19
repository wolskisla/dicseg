import React from 'react'
import { init, RenderingEngine } from '@cornerstonejs/core';
import { ViewportType } from '@cornerstonejs/core/dist/esm/enums';
import * as cornerstone from 'cornerstone-core'


const content = document.getElementById('content');
const element = document.createElement('div');
element.style.width = '500px';
element.style.height = '500px';

content.appendChild(element);

const renderingEngineId = 'myRenderingEngine';
const viewportId = 'CT_AXIAL_STACK';
const renderingEngine = new RenderingEngine(renderingEngineId);

const viewportInput = {
  viewportId,
  element,
  type: ViewportType.STACK,
};

renderingEngine.enableElement(viewportInput);

const viewport = renderingEngine.getViewport(viewportInput.viewportId);

//viewport.setStack(imageIds, 60);

viewport.render();

