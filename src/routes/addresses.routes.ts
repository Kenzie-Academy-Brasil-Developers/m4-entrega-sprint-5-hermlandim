import { Router } from "express";
import {
  createAddressController,
  listAllAddressesController,
} from "../controllers/addresses.controller";

export const addressesRoutes = Router();

addressesRoutes.post("", createAddressController);
addressesRoutes.get("", listAllAddressesController);
