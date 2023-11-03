"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CaretSortIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import moment from "moment";
import { toast } from "sonner";
import Link from "next/link";

import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown";
import { deleteCourse } from "../action";
import { getCookie } from "@/lib/services/cookie.service";
import { ITrainingData } from "../../../../../(user)/courses/page";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../../../../../components/ui/alert-dialog";

export const columns: ColumnDef<ITrainingData>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "nama",
    cell: ({ row, getValue, table }) => {
      const nama = row.original.nama;
      return (
        <Link
          href={`/admin/courses/${row.original.id}`}
          className="hover:underline hover:text-green transition-all duration-150"
        >
          {nama}
        </Link>
      );
    },
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="border-none justify-start"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Judul Pelatihan
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "trainingOrganizer.nama",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="border-none justify-start"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Penyelenggara
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  // {
  //   accessorKey: "quota",
  // },
  {
    accessorKey: "trainingCandidates",
    cell: ({ row, getValue, table }) => {
      // @ts-ignore
      const totalKandidat: number = row.getValue("trainingCandidates").length;
      const quota = row.original.quota;
      return `${totalKandidat}/${quota}`;
    },
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="border-none justify-start"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Total Peserta
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "training_end",
    cell: ({ row }) => {
      const training_end: Date = row.getValue("training_end");
      return moment(training_end).format("DD MMMM YYYY");
    },
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="border-none justify-start"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Pelatihan selesai
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "draft",
    cell: ({ row }) => {
      const draft: Date = row.getValue("draft");

      return draft ? "Draft" : "Dupublikasi";
    },
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="border-none justify-start"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const training = row.original;

      return (
        <AlertDialog>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="h-8 w-8 p-0 border-none" variant={"outline"}>
                <span className="sr-only">Open menu</span>
                <HamburgerMenuIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="border-opacity-green">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => {
                  navigator.clipboard.writeText(training.id);
                  toast.success("Course dengan ID " + training.id + " tercopy");
                }}
              >
                Copy ID Pelatihan
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href={`/admin/courses/${training.id}/edit`}>Edit</Link>
              </DropdownMenuItem>
              <AlertDialogTrigger asChild>
                <DropdownMenuItem>Hapus</DropdownMenuItem>
              </AlertDialogTrigger>
            </DropdownMenuContent>
          </DropdownMenu>

          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Hapus kursus{" "}
                <span className="text-green underline-offset-1 underline decoration-green">
                  {training.nama}
                </span>
              </AlertDialogTitle>
              <AlertDialogDescription>
                Action ini tidak bisa di-undo, apakah Anda yakin?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Batal</AlertDialogCancel>
              <AlertDialogAction
                onClick={async () => {
                  const adminAK = await getCookie("adminAK");
                  if (adminAK) {
                    const del = await deleteCourse(training.id, adminAK);
                    if (del) {
                      return toast.success("Course deleted");
                    }
                    return toast.error("Failed to delete course");
                  }
                }}
              >
                Hapus
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      );
    },
  },
];
