---------SEED DATA----------
--Slider
SET IDENTITY_INSERT [Slider] ON
INSERT INTO [Slider] 
  ([Id], [Name], [ImageUrl])
VALUES
  (1, 'Slider 1', 'https://mobisoftinfotech.com/resources/wp-content/uploads/2018/07/Thumbnail-1.png');
INSERT INTO [Slider] 
  ([Id], [Name], [ImageUrl])
VALUES
  (2, 'Slider 2', 'https://img.freepik.com/free-vector/online-doctor-concept_23-2148517207.jpg?size=626&ext=jpg&ga=GA1.1.483536436.1699022222&semt=ais');
SET IDENTITY_INSERT [Slider] OFF

--Category
SET IDENTITY_INSERT [Category] ON
INSERT INTO [Category] 
  ([Id], [Name], [IconUrl])
VALUES
  (1, 'Primary Dr.', 'https://img.icons8.com/ios-filled/50/228BE6/stethoscope.png');
INSERT INTO [Category] 
  ([Id], [Name], [IconUrl])
VALUES
  (2, 'Neurologist', 'https://img.icons8.com/ios-filled/50/228BE6/brain.png');
INSERT INTO [Category] 
  ([Id], [Name], [IconUrl])
VALUES
  (3, 'Pulmonologist', 'https://img.icons8.com/pastel-glyph/64/228BE6/lungs--v2.png');
INSERT INTO [Category] 
  ([Id], [Name], [IconUrl])
VALUES
  (4, 'Cardiologist', 'https://img.icons8.com/ios-filled/50/228BE6/heart-with-pulse--v1.png');
INSERT INTO [Category] 
  ([Id], [Name], [IconUrl])
VALUES
  (5, 'Podiatrist', 'https://img.icons8.com/ios-filled/50/228BE6/ankle.png');
SET IDENTITY_INSERT [Category] OFF

--Hospital
SET IDENTITY_INSERT [Hospital] ON
INSERT INTO [Hospital] 
  ([Id], [Name], [Address], [ImageUrl], [Website], [Phone], [Description])
VALUES
  (1, 'St. Marys', '2900 First Avenue Huntington, WV 25702', 'https://www.st-marys.org/assets/Images/Content-Images/SMMC/exterior.jpg', 'https://www.st-marys.org', '3045261234', 'St. Marys Medical Center in Huntington, WV, founded in 1924, is a leading healthcare facility offering diverse specialties and advanced technology for patient care in the Tri-State area. Known for its skilled professionals and community-focused approach, it prioritizes personalized, high-quality healthcare services.');
INSERT INTO [Hospital] 
  ([Id], [Name], [Address], [ImageUrl], [Website], [Phone], [Description])
VALUES
  (2, 'Cabell Huntington', '1600 Medical Center Dr, Huntington, WV 25701', 'https://cabellhuntington.org/assets/Images/Content-Images/CHH/About-CHH/CHH-campus-shot__ResizedImageWzYwMCwzMzRd.jpg', 'https://cabellhuntington.org/', '3045262000', '
Cabell Huntington Hospital in Huntington, WV, is a prominent healthcare institution known for its comprehensive medical services and commitment to patient care. Renowned for its advanced facilities and dedicated professionals, it provides a wide range of specialties while prioritizing top-tier healthcare for its community.');
SET IDENTITY_INSERT [Hospital] OFF

--Hospital_Category
SET IDENTITY_INSERT [Hospital_Category] ON
--Hospital 1
INSERT INTO [Hospital_Category] 
  ([Id], [HospitalId], [CategoryId])
VALUES
  (1, 1, 2);
INSERT INTO [Hospital_Category] 
  ([Id], [HospitalId], [CategoryId])
VALUES
  (2, 1, 3);
INSERT INTO [Hospital_Category] 
  ([Id], [HospitalId], [CategoryId])
VALUES
  (3, 1, 4);
INSERT INTO [Hospital_Category] 
  ([Id], [HospitalId], [CategoryId])
VALUES
  (4, 1, 5);
--Hospital 2
INSERT INTO [Hospital_Category] 
  ([Id], [HospitalId], [CategoryId])
VALUES
  (5, 2, 1);
INSERT INTO [Hospital_Category] 
  ([Id], [HospitalId], [CategoryId])
VALUES
  (6, 2, 3);
INSERT INTO [Hospital_Category] 
  ([Id], [HospitalId], [CategoryId])
VALUES
  (7, 2, 5);
SET IDENTITY_INSERT [Hospital_Category] OFF


--Doctor
SET IDENTITY_INSERT [Doctor] ON
INSERT INTO [Doctor] 
  ([Id], [Name], [Years_Of_Experience], [StartTime], [EndTime], [About], [HospitalId], [CategoryId], [ImageUrl])
VALUES
  (1, 'Debra Freewater', 1, '8:00', '5:00', 'Dr. Freewater has recently finished her studies and started here as a full time doctor. She was also born here.', 2, 1, 'https://img.freepik.com/free-photo/medium-shot-smiley-doctor-with-coat_23-2148814212.jpg?size=626&ext=jpg&ga=GA1.1.483536436.1699022222&semt=ais');
INSERT INTO [Doctor] 
  ([Id], [Name], [Years_Of_Experience], [StartTime], [EndTime], [About], [HospitalId], [CategoryId], [ImageUrl])
VALUES
  (2, 'John Matthews', 30, '9:00', '2:30', 'Dr. Matthews has a family of 2 kids. He plays chess and tennis in his free time.', 2, 3, 'https://img.freepik.com/free-photo/close-up-doctor-getting-ready-work_23-2149152478.jpg?size=626&ext=jpg&ga=GA1.1.483536436.1699022222&semt=ais');
INSERT INTO [Doctor] 
  ([Id], [Name], [Years_Of_Experience], [StartTime], [EndTime], [About], [HospitalId], [CategoryId], [ImageUrl])
VALUES
  (3, 'Shelby Tennyson', 8, '10:00', '8:30', 'Dr. Tennyson owns 2 cats and loves to garden.', 2, 5, 'https://img.freepik.com/free-photo/close-up-doctor-getting-ready-work_23-2149152499.jpg?size=626&ext=jpg&ga=GA1.1.483536436.1699022222&semt=ais');
INSERT INTO [Doctor] 
  ([Id], [Name], [Years_Of_Experience], [StartTime], [EndTime], [About], [HospitalId], [CategoryId], [ImageUrl])
VALUES
  (4, 'Henry Jorgenson IV', 22, '6:00', '1:00', 'Dr. Jorgenson lives in a mansion passed down from his father who was also a doctor.', 1, 2, 'https://img.freepik.com/free-photo/portrait-experienced-professional-therapist-with-stethoscope-looking-camera_1098-19305.jpg?size=626&ext=jpg&ga=GA1.1.483536436.1699022222&semt=ais');
INSERT INTO [Doctor] 
  ([Id], [Name], [Years_Of_Experience], [StartTime], [EndTime], [About], [HospitalId], [CategoryId], [ImageUrl])
VALUES
  (5, 'Harriet Smith', 9, '9:00', '4:00', 'Dr. Smith loves watching rugby, go All Blacks!', 1, 3, 'https://img.freepik.com/free-photo/doctor-with-white-robe-stethoscope_144627-43879.jpg?size=626&ext=jpg&ga=GA1.1.483536436.1699022222&semt=ais');
INSERT INTO [Doctor] 
  ([Id], [Name], [Years_Of_Experience], [StartTime], [EndTime], [About], [HospitalId], [CategoryId], [ImageUrl])
VALUES
  (6, 'James Trudd', 4, '8:00', '3:30', 'Dr. Trudd emjoys any time he gets with his two daughters.', 1, 4, 'https://img.freepik.com/free-photo/front-view-smiley-man-wearing-lab-coat_23-2149633830.jpg?size=626&ext=jpg&ga=GA1.1.483536436.1699022222&semt=ais');
INSERT INTO [Doctor] 
  ([Id], [Name], [Years_Of_Experience], [StartTime], [EndTime], [About], [HospitalId], [CategoryId], [ImageUrl])
VALUES
  (7, 'Brandon Craig', 3, '5:00', '12:30', 'Dr. Craig loves to be outdoors. Some of his hobbies are hiking, biking, kayaking, and rock climbing.', 1, 5, 'https://img.freepik.com/free-photo/doctor-smiling-with-stethoscope_1154-36.jpg?size=626&ext=jpg&ga=GA1.1.483536436.1699022222&semt=ais');
INSERT INTO [Doctor] 
  ([Id], [Name], [Years_Of_Experience], [StartTime], [EndTime], [About], [HospitalId], [CategoryId], [ImageUrl])
VALUES
  (8, 'Frank Uchtdenshneif', 18, '9:00', '5:30', 'Dr. Uchtdenshneif loves science. He always knew he would be a doctor.', 1, 2, 'https://img.freepik.com/free-photo/close-up-health-worker_23-2149112580.jpg?size=626&ext=jpg&ga=GA1.1.483536436.1699022222&semt=ais');
INSERT INTO [Doctor] 
  ([Id], [Name], [Years_Of_Experience], [StartTime], [EndTime], [About], [HospitalId], [CategoryId], [ImageUrl])
VALUES
  (9, 'Elizabeth Harrison', 6, '11:00', '6:30', 'Dr. Harrison loves to eat sweets. Her favorite is pistachio ice cream.', 1, 4, 'https://img.freepik.com/free-photo/front-view-female-physician-with-stethoscope-posing_23-2148847612.jpg?size=626&ext=jpg&ga=GA1.1.483536436.1699022222&semt=ais');
INSERT INTO [Doctor] 
  ([Id], [Name], [Years_Of_Experience], [StartTime], [EndTime], [About], [HospitalId], [CategoryId], [ImageUrl])
VALUES
  (10, 'Shane Green', 27, '7:00', '5:00', 'Dr. Green enjoys most days swimming in his pool. He has it heated and indoors so he can swim all year long.', 2, 1, 'https://img.freepik.com/free-photo/confident-senior-doctor-with-clipboard_23-2147896173.jpg?size=626&ext=jpg&ga=GA1.1.483536436.1699022222&semt=ais');
INSERT INTO [Doctor] 
  ([Id], [Name], [Years_Of_Experience], [StartTime], [EndTime], [About], [HospitalId], [CategoryId], [ImageUrl])
VALUES
  (11, 'Brittany Flint', 6, '9:00', '5:30', 'Dr. Flint plays dungeons and dragons with her friends who are software engineers.', 2, 1, 'https://img.freepik.com/free-photo/young-beautiful-successful-female-doctor-with-stethoscope-portrait_186202-1506.jpg?size=626&ext=jpg&ga=GA1.1.483536436.1699022222&semt=ais');
INSERT INTO [Doctor] 
  ([Id], [Name], [Years_Of_Experience], [StartTime], [EndTime], [About], [HospitalId], [CategoryId], [ImageUrl])
VALUES
  (12, 'Vivian Tao', 7, '9:00', '2:30', 'Dr. Tao watches WWE and plays lots of video games, especially first person shooter games.', 1, 4, 'https://img.freepik.com/free-photo/asian-female-doctor-posing-medicine-specialist_144627-30222.jpg?size=626&ext=jpg&ga=GA1.1.483536436.1699022222&semt=ais');

SET IDENTITY_INSERT [Doctor] OFF

--Appointment
SET IDENTITY_INSERT [Appointment] ON
INSERT INTO [Appointment] 
  ([Id], [UserName], [Email], [Date], [Time], [Note], [HospitalId])
VALUES
  (1, 'John Smith', 'johnsmith@email.com','2023-11-07 08:00:00', '8:00', 'We have to make sure this does not go too long. I have a meeting right after', 1);
INSERT INTO [Appointment] 
  ([Id], [UserName], [Email], [Date], [Time], [Note], [HospitalId])
VALUES
  (2, 'Ashely Adams', 'ashleyadams@email.com','2023-11-07 09:00:00', '9:00', 'I have a giant mole on the back of my head', 2);

SET IDENTITY_INSERT [Appointment] OFF
