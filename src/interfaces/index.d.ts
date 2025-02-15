export interface IClient {
  id: number;
  name: string;
  projects?: Project[];
}

export interface IJob {
  id: number;
  jobId: string;
  user?: string;
  filename?: string;
  status?: string;
  startTime?: number;
  endTime?: number;
  printDuration?: number;
  totalDuration?: number;
  filamentUsed?: number;
  metadata?: {
    size?: number;
    modified?: number;
    uuid?: string;
    slicer?: string;
    slicerVersion?: string;
    gcodeStartByte?: number;
    gcodeEndByte?: number;
    layerCount?: number;
    objectHeight?: number;
    estimatedTime?: number;
    nozzleDiameter?: number;
    layerHeight?: number;
    firstLayerHeight?: number;
    firstLayerExtrTemp?: number;
    firstLayerBedTemp?: number;
    chamberTemp?: number;
    filamentName?: string;
    filamentType?: string;
    filamentTotal?: number;
    filamentWeightTotal?: number;
  };
  auxiliaryData?: {
    provider?: string;
    name?: string;
    value?: number[];
    description?: string;
    units?: string | null;
  }[];
  exists?: boolean;
  project?: Project;
}

export interface IProject {
  id: number;
  name: string;
  description?: string;
  client?: Client;
  jobs?: Job[];
}
