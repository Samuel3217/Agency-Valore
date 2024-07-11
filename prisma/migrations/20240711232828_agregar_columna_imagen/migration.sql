-- CreateTable
CREATE TABLE "afiliados" (
    "afiliado_Id" SERIAL NOT NULL,
    "nombre_empresa" VARCHAR(100),
    "nombre_persona" VARCHAR(100),
    "email" VARCHAR(100) NOT NULL,
    "telefono" VARCHAR(15) NOT NULL,
    "direccion" VARCHAR(500) NOT NULL,
    "birthday" DATE,
    "descuento_porcentaje" DOUBLE PRECISION,

    CONSTRAINT "afiliados_pkey" PRIMARY KEY ("afiliado_Id")
);

-- CreateTable
CREATE TABLE "categoria_promocion" (
    "categoriaPromo_Id" SERIAL NOT NULL,
    "categoria_Id" INTEGER NOT NULL,
    "promocion_Id" INTEGER NOT NULL,

    CONSTRAINT "categoria_promocion_pkey" PRIMARY KEY ("categoriaPromo_Id")
);

-- CreateTable
CREATE TABLE "categorias" (
    "categoria_Id" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,

    CONSTRAINT "categorias_pkey" PRIMARY KEY ("categoria_Id")
);

-- CreateTable
CREATE TABLE "detallesVenta" (
    "detallesVenta_Id" SERIAL NOT NULL,
    "venta_Id" INTEGER NOT NULL,
    "producto_Id" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "precio" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "detallesVenta_pkey" PRIMARY KEY ("detallesVenta_Id")
);

-- CreateTable
CREATE TABLE "empleados" (
    "empleado_Id" SERIAL NOT NULL,
    "nombre" VARCHAR(150) NOT NULL,
    "correo" VARCHAR(100) NOT NULL,
    "contraseña" VARCHAR(100) NOT NULL,
    "imagen" VARCHAR(100) NOT NULL,
    "rol_Id" INTEGER NOT NULL,

    CONSTRAINT "empleados_pkey" PRIMARY KEY ("empleado_Id")
);

-- CreateTable
CREATE TABLE "producto_promocion" (
    "productoPromo_Id" SERIAL NOT NULL,
    "producto_Id" INTEGER NOT NULL,
    "promocion_Id" INTEGER NOT NULL,

    CONSTRAINT "producto_promocion_pkey" PRIMARY KEY ("productoPromo_Id")
);

-- CreateTable
CREATE TABLE "productos" (
    "producto_Id" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "descripcion" VARCHAR(500) NOT NULL,
    "precio" DOUBLE PRECISION NOT NULL,
    "stock" INTEGER NOT NULL,
    "imagen" VARCHAR(100) NOT NULL,
    "categoria_Id" INTEGER NOT NULL,
    "createdAt" DATE,

    CONSTRAINT "productos_pkey" PRIMARY KEY ("producto_Id")
);

-- CreateTable
CREATE TABLE "promociones" (
    "promocion_Id" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "tipo" VARCHAR(100) NOT NULL,
    "descuento" DOUBLE PRECISION,
    "comprar_cantidad" INTEGER,
    "pagar_cantidad" INTEGER,
    "por_cada" DOUBLE PRECISION,
    "fecha_inicio" TIMESTAMPTZ(6) NOT NULL,
    "fecha_fin" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "promociones_pkey" PRIMARY KEY ("promocion_Id")
);

-- CreateTable
CREATE TABLE "roles" (
    "rol_Id" SERIAL NOT NULL,
    "rol" VARCHAR(50) NOT NULL,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("rol_Id")
);

-- CreateTable
CREATE TABLE "usuarios" (
    "usuario_Id" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "usuario" VARCHAR(50) NOT NULL,
    "correo" VARCHAR(100) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "direccion" VARCHAR(500) NOT NULL,
    "birthday" DATE,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("usuario_Id")
);

-- CreateTable
CREATE TABLE "ventas" (
    "venta_Id" SERIAL NOT NULL,
    "usuario_Id" INTEGER,
    "afiliado_Id" INTEGER,
    "tipo_usuario" VARCHAR(50) NOT NULL,
    "metodo_pago" VARCHAR(50) NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "fecha" DATE NOT NULL,

    CONSTRAINT "ventas_pkey" PRIMARY KEY ("venta_Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "categoria_promocion_categoria_Id_promocion_Id_key" ON "categoria_promocion"("categoria_Id", "promocion_Id");

-- CreateIndex
CREATE UNIQUE INDEX "producto_promocion_producto_Id_promocion_Id_key" ON "producto_promocion"("producto_Id", "promocion_Id");

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_usuario_key" ON "usuarios"("usuario");

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_correo_key" ON "usuarios"("correo");

-- AddForeignKey
ALTER TABLE "categoria_promocion" ADD CONSTRAINT "categoria_promocion_categoria_Id_fkey" FOREIGN KEY ("categoria_Id") REFERENCES "categorias"("categoria_Id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "categoria_promocion" ADD CONSTRAINT "categoria_promocion_promocion_Id_fkey" FOREIGN KEY ("promocion_Id") REFERENCES "promociones"("promocion_Id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "empleados" ADD CONSTRAINT "empleados_rol_Id_fkey" FOREIGN KEY ("rol_Id") REFERENCES "roles"("rol_Id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "producto_promocion" ADD CONSTRAINT "producto_promocion_producto_Id_fkey" FOREIGN KEY ("producto_Id") REFERENCES "productos"("producto_Id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "producto_promocion" ADD CONSTRAINT "producto_promocion_promocion_Id_fkey" FOREIGN KEY ("promocion_Id") REFERENCES "promociones"("promocion_Id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productos" ADD CONSTRAINT "productos_categoria_Id_fkey" FOREIGN KEY ("categoria_Id") REFERENCES "categorias"("categoria_Id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ventas" ADD CONSTRAINT "ventas_afiliado_Id_fkey" FOREIGN KEY ("afiliado_Id") REFERENCES "afiliados"("afiliado_Id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ventas" ADD CONSTRAINT "ventas_usuario_Id_fkey" FOREIGN KEY ("usuario_Id") REFERENCES "usuarios"("usuario_Id") ON DELETE CASCADE ON UPDATE CASCADE;
