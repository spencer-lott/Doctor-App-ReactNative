---------DATABASE----------
USE [master]
GO
IF db_id('DoctorAppointmentApp') IS NULL
	CREATE DATABASE [DoctorAppointmentApp]
GO
USE [DoctorAppointmentApp]
GO

CREATE TABLE [Slider] (
  [Id] int PRIMARY KEY identity NOT NULL,
  [Name] nvarchar(255),
  [ImageUrl] nvarchar(255)
);
GO

CREATE TABLE [Category] (
  [Id] int PRIMARY KEY identity NOT NULL,
  [Name] nvarchar(255),
  [IconUrl] nvarchar(255) 
);
GO

CREATE TABLE [Doctor] (
  [Id] int PRIMARY KEY identity NOT NULL,
  [Name] nvarchar(255),
  [Years_Of_Experience] int,
  [StartTime] nvarchar(255),
  [EndTime] nvarchar(255),
  [About] nvarchar(255),
  [HospitalId] int,
  [CategoryId] int,
  [ImageUrl] nvarchar(255)
);
GO

CREATE TABLE [Hospital] (
  [Id] int PRIMARY KEY identity NOT NULL,
  [Name] nvarchar(255),
  [Address] nvarchar(255),
  [ImageUrl] nvarchar(255),
  [Website] nvarchar(255),
  [Phone] nvarchar(255),
  [Description] nvarchar(1000)
);
GO

CREATE TABLE [Appointment] (
  [Id] int PRIMARY KEY identity NOT NULL,
  [UserName] nvarchar(255),
  [Email] nvarchar(255),
  [Date] datetime,
  [Time] nvarchar(255),
  [Note] nvarchar(255),
  [HospitalId] int
);
GO

CREATE TABLE [Hospital_Category] (
  [Id] int PRIMARY KEY identity NOT NULL,
  [HospitalId] int,
  [CategoryId] int
)

ALTER TABLE [Doctor] ADD FOREIGN KEY ([HospitalId]) REFERENCES [Hospital] ([Id]);
GO
ALTER TABLE [Doctor] ADD FOREIGN KEY ([CategoryId]) REFERENCES [Category] ([Id]);
GO
ALTER TABLE [Hospital_Category] ADD FOREIGN KEY ([HospitalId]) REFERENCES [Hospital] ([Id]);
GO
ALTER TABLE [Hospital_Category] ADD FOREIGN KEY ([CategoryId]) REFERENCES [Category] ([Id]);
GO





