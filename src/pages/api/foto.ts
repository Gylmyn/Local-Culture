import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/script/prisma";


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    if (req.query.id) {
      return handleGetById(req, res);
    } else {
      return handleGetAll(req, res);
    }
  }

  // if (req.method === "POST") {
  //   handlePostMethod(req, res);
  // }

  // if (req.method === "DELETE") {
  //   handleDeleteMethod(req, res);
  // }

  // if (req.method === "PUT") {
  //   handlePutMethod(req, res);
  // }
}




async function handleGetById(req: NextApiRequest, res: NextApiResponse) {
  try {
    const id = parseInt(req.query.id as string);
    const fotoData = await prisma.fotos.findUnique({
      where: { id },
    });

    if (!fotoData) {
      return res.status(404).json({ message: 'Pin not found' });
    }

    res.status(200).json(fotoData);
  } catch (error) {
    console.error('Error fetching pin data by ID:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

// Fungsi untuk mengambil semua data pin
async function handleGetAll(req: NextApiRequest, res: NextApiResponse) {
  try {
    const allFotoData = await prisma.fotos.findMany();
    res.status(200).json(allFotoData);
  } catch (error) {
    console.error('Error fetching all pin data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

