// Import PrismaClient
import prisma from '@/script/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

// Handler untuk endpoint API /api/pins
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    if (req.query.id) {
      return handleGetById(req, res);
    } else {
      return handleGetAll(req, res);
    }
  }
}

// Fungsi untuk mengambil data pin berdasarkan ID
async function handleGetById(req: NextApiRequest, res: NextApiResponse) {
  try {
    const id = parseInt(req.query.id as string);
    const pinData = await prisma.pin.findUnique({
      where: { id },
    });

    if (!pinData) {
      return res.status(404).json({ message: 'Pin not found' });
    }

    res.status(200).json(pinData);
  } catch (error) {
    console.error('Error fetching pin data by ID:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

// Fungsi untuk mengambil semua data pin
async function handleGetAll(req: NextApiRequest, res: NextApiResponse) {
  try {
    const allPinData = await prisma.pin.findMany();
    res.status(200).json(allPinData);
  } catch (error) {
    console.error('Error fetching all pin data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}













// import { NextApiRequest, NextApiResponse } from "next";
// import prisma from "@/script/prisma";

// async function handleGetMethod(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     const response = await prisma.project.findMany();
//     res.status(200).json(response);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: "Terjadi kesalahan saat mengambil data" });
//   }
// }

// async function handlePostMethod(req: NextApiRequest, res: NextApiResponse) {
//   const dataFromClient = req.body;

//   try {
//     const result = await prisma.project.create({
//       data: {
//         client: dataFromClient.client,
//         deadline: dataFromClient.deadline,
//         nama: dataFromClient.nama,
//         nilai: dataFromClient.nilai,
//         prgress: dataFromClient.prgress,
//       },
//     });

//     res.status(200).json(result);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: "Terjadi kesalahan saat menyimpan data" });
//   }
// }

// async function handleDeleteMethod(req: NextApiRequest, res: NextApiResponse) {
//   const idData = Number(req.query.id);
//   try {
//     const response = await prisma.project.delete({
//       where: {
//         id: idData,
//       },
//     });
//     res.status(200).json(response);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: "Terjadi kesalahan saat mengambil data" });
//   }
// }

// async function handlePutMethod(req: NextApiRequest, res: NextApiResponse) {
//   const dataFromClient = req.body;

//   try {
//     const result = await prisma.project.update({
//       data: {
//         client: dataFromClient.client,
//         nama: dataFromClient.nama,
//         nilai: dataFromClient.nilai,
//         prgress: dataFromClient.prgress,
//         deadline: dataFromClient.deadline,
//       },
//       where: {
//         id: dataFromClient.id,
//       },
//     });

//     res.status(200).json(result);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: "Terjadi kesalahan saat memperbarui data" });
//   }
// }

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === "GET") {
//     handleGetMethod(req, res);
//   }

//   if (req.method === "POST") {
//     handlePostMethod(req, res);
//   }

//   if (req.method === "DELETE") {
//     handleDeleteMethod(req, res);
//   }

//   if (req.method === "PUT") {
//     handlePutMethod(req, res);
//   }
// }
