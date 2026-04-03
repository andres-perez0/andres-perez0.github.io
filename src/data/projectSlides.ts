/**
 * Central list of project gallery images.
 *
 * Imports must live here (or in the `.astro` file) so Vite can bundle each file and Astro’s
 * image pipeline can optimize it at build time. Moving binaries from `public/` → `src/assets/`
 * is what enables that — files in `public/` are copied verbatim with no conversion.
 */
import type { ImageMetadata } from "astro";
import type { ProjectSlide } from "../types/projectGallery";

import goatNormal from "../assets/projects/IrishSat/normal_activity.jpg";
import goatSim from "../assets/projects/IrishSat/simulation_graph.jpg";

import rSetUp from "../assets/projects/research/set_up.jpg";
import rFlow from "../assets/projects/research/flow.png";
import rWireshark from "../assets/projects/research/wireshark.jpg";
import rCsv from "../assets/projects/research/csv.jpg";
import rGps from "../assets/projects/research/gps_tracker.png";

import tRxTx from "../assets/projects/temp/Rx_Tx_ML_project.jpg";
import tSitting from "../assets/projects/temp/sitting_0.png";
import tWalking from "../assets/projects/temp/walking_10.png";

import tFourDesign from "../assets/projects/temp/four_layer_design.png";
import tFourView from "../assets/projects/temp/four_layer_view.png";
import tMfgFront from "../assets/projects/temp/manufacture_pcb_front.jpg";
import tMfgBack from "../assets/projects/temp/manufacture_pcb_back.jpg";

import tMpu from "../assets/projects/temp/mpu9250_arduino.jpg";
import tMpuSetup from "../assets/projects/temp/mpu9250_arduino_setup.jpg";

import isPoster from "../assets/projects/IrishSat/GOAT_Electrical_Banquet_Poster_Spring_2025.png";
import isPhoto3 from "../assets/projects/IrishSat/IrishSatPhoto3.png";
import isPhoto2 from "../assets/projects/IrishSat/IrishSatPhoto2.png";
import isPhoto1 from "../assets/projects/IrishSat/IrishSatPhoto1.png";
import isGoatPcbLayout from "../assets/projects/IrishSat/GOATPCB_layout.png";
import isGoatPcb3d from "../assets/projects/IrishSat/GOATPCB_3D_view.png";
import isPhoto4 from "../assets/projects/IrishSat/IrishSatPhoto4.png";
import isMagLayout from "../assets/projects/IrishSat/Magnetometer_layout.png";

import rfc1 from "../assets/projects/RFC/RFCPhoto1.png";
import rfc2 from "../assets/projects/RFC/RFCPhoto2.png";
import rfc3 from "../assets/projects/RFC/RFCPhoto3.png";
import rfc4 from "../assets/projects/RFC/RFCPhoto4.jpg";

import vex1 from "../assets/projects/VEX/VEXPhoto1.jpg";
import vex2 from "../assets/projects/VEX/VEXPhoto2.png";
import vex3 from "../assets/projects/VEX/VEXPhoto3.png";
import vex4 from "../assets/projects/VEX/VEXPhoto4.png";
import vex5 from "../assets/projects/VEX/VEXPhoto5.png";
import vex6 from "../assets/projects/VEX/VEXPhoto6.png";
import vex7 from "../assets/projects/VEX/VEXPhoto7.jpg";
import vex8 from "../assets/projects/VEX/VEXPhoto8.jpg";

import inv1 from "../assets/projects/InvenTeam/InventPhoto1.jpg";
import inv2 from "../assets/projects/InvenTeam/InventPhoto2.jpg";
import inv3 from "../assets/projects/InvenTeam/InventPhoto3.jpg";
import inv4 from "../assets/projects/InvenTeam/InventPhoto4.jpg";
import inv5 from "../assets/projects/InvenTeam/InventPhoto5.jpg";

import edd1 from "../assets/projects/EDD/EDDPhoto1.jpg";
import edd2 from "../assets/projects/EDD/EDDPhoto2.jpg";
import edd3 from "../assets/projects/EDD/EDDPhoto3.jpg";
import edd4 from "../assets/projects/EDD/EDDPhoto4.jpg";
import edd5 from "../assets/projects/EDD/EDDPhoto5.jpg";
import edd6 from "../assets/projects/EDD/EDDPhoto6.jpg";
import edd7 from "../assets/projects/EDD/EDDPhoto7.jpg";

import carpa1 from "../assets/projects/CARPA/CARPAPhoto1.jpg";
import carpa2 from "../assets/projects/CARPA/CARPAPhoto2.jpg";
import carpa3 from "../assets/projects/CARPA/CARPAPhoto3.jpg";
import carpa4 from "../assets/projects/CARPA/CARPAPhoto4.jpg";
import carpa5 from "../assets/projects/CARPA/CARPAPhoto5.jpg";
import carpa6 from "../assets/projects/CARPA/CARPAPhoto6.jpg";

const slide = (src: ImageMetadata, alt: string, id?: string): ProjectSlide => ({ src, alt, id });

export const goatlabHighlightSlides: ProjectSlide[] = [
  slide(goatNormal, ""),
  slide(goatSim, ""),
];

export const droneResearchSlides: ProjectSlide[] = [
  slide(rSetUp, ""),
  slide(rFlow, ""),
  slide(rWireshark, ""),
  slide(rCsv, ""),
  slide(rGps, ""),
];

export const summerClassifierSlides: ProjectSlide[] = [
  slide(tRxTx, ""),
  slide(tSitting, ""),
  slide(tWalking, ""),
];

export const summerPcbSlides: ProjectSlide[] = [
  slide(tFourDesign, ""),
  slide(tFourView, ""),
  slide(tMfgFront, ""),
  slide(tMfgBack, ""),
];

export const summerMpu9250Slides: ProjectSlide[] = [slide(tMpu, ""), slide(tMpuSetup, "")];

export const irishSatDetailSlides: ProjectSlide[] = [
  slide(isPoster, ""),
  slide(isPhoto3, ""),
  slide(isPhoto2, ""),
  slide(isPhoto1, ""),
  slide(isGoatPcbLayout, ""),
  slide(isGoatPcb3d, ""),
  slide(isPhoto4, ""),
  slide(isMagLayout, ""),
];

export const rfcSlides: ProjectSlide[] = [
  slide(rfc1, "", "slide-1"),
  slide(rfc2, "", "slide-2"),
  slide(rfc3, "", "slide-3"),
  slide(rfc4, "", "slide-4"),
];

export const vexSlides: ProjectSlide[] = [
  slide(vex1, "", "slide-1"),
  slide(vex2, "", "slide-2"),
  slide(vex3, "", "slide-3"),
  slide(vex4, "", "slide-4"),
  slide(vex5, "", "slide-5"),
  slide(vex6, "", "slide-6"),
  slide(vex7, "", "slide-7"),
  slide(vex8, "", "slide-8"),
];

export const invenTeamSlides: ProjectSlide[] = [
  slide(inv1, "", "slide-1"),
  slide(inv2, "", "slide-2"),
  slide(inv3, "", "slide-3"),
  slide(inv4, "", "slide-4"),
  slide(inv5, "", "slide-5"),
];

export const eddSlides: ProjectSlide[] = [
  slide(edd1, "Final EDD Module Completed", "slide-1"),
  slide(edd2, "Final EDD Module Completed; Far View", "slide-2"),
  slide(edd3, "EDD-Borrow Home Soldering Set Up", "slide-3"),
  slide(edd4, "Work Bench", "slide-4"),
  slide(edd5, "", "slide-5"),
  slide(edd6, "", "slide-6"),
  slide(edd7, "", "slide-7"),
];

export const carpaSlides: ProjectSlide[] = [
  slide(carpa1, "", "slide-1"),
  slide(carpa2, "", "slide-2"),
  slide(carpa3, "", "slide-3"),
  slide(carpa4, "", "slide-4"),
  slide(carpa5, "", "slide-5"),
  slide(carpa6, "", "slide-6"),
];
