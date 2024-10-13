INSERT INTO topic(id, name, description)
VALUES (0, 'be ITMO', 'some desc'),
       (1, 'Well-being challenge', 'some desc'),
       (2, 'Work-life balance', 'some desc'),
       (3, 'be friendly', 'some desc'),
       (4, 'be healthy', 'some desc'),
       (5, 'be fit', 'some desc'),
       (6, 'be eco', 'some desc'),
       (7, 'be open', 'some desc'),
       (8, 'be pro', 'some desc');

INSERT INTO task(id, picture, name, topic_id, description, points, category, deadline, explanation)
VALUES (0, 'place', 'Посети музей оптики ИТМО 1', 3, 'some desc', 10, 'Место', '2025-08-30 10:00:00', 'some explanation'),
       (1, '', '1st', 8, 'some desc', 1, 'some category', '2025-08-30 10:00:00', 'some explanation'),
       (2, '', '2d', 8, 'some desc', 2, 'some category', '2025-08-30 10:00:00', 'some explanation'),
       (3, 'test', 'Квиз "Я на friendly vibes 1"', 3, 'some desc', 2, 'Тест', '2025-08-30 10:00:00', 'some explanation'),
       (4, 'event', 'Посети ITMO FAMILY DAY 1', 3, 'some desc', 2, 'Мероприятие', '2025-08-30 10:00:00', 'some explanation'),
       (5, 'place', 'Посети музей оптики ИТМО 2', 3, 'some desc', 10, 'Место', '2025-08-30 10:00:00', 'some explanation'),
       (6, 'place', 'Посети музей оптики ИТМО 3', 3, 'some desc', 10, 'Место', '2025-08-30 10:00:00', 'some explanation'),
       (7, 'place', 'Посети музей оптики ИТМО 4', 3, 'some desc', 10, 'Место', '2025-08-30 10:00:00', 'some explanation'),
       (8, 'place', 'Посети музей оптики ИТМО 5', 3, 'some desc', 10, 'Место', '2025-08-30 10:00:00', 'some explanation'),
       (9, 'place', 'Посети музей оптики ИТМО 6', 3, 'some desc', 10, 'Место', '2025-08-30 10:00:00', 'some explanation'),
       (10, 'test', 'Квиз "Я на friendly vibes 2"', 3, 'some desc', 2, 'Тест', '2025-08-30 10:00:00', 'some explanation'),
       (11, 'test', 'Квиз "Я на friendly vibes 3"', 3, 'some desc', 2, 'Тест', '2025-08-30 10:00:00', 'some explanation'),
       (12, 'test', 'Квиз "Я на friendly vibes 4"', 3, 'some desc', 2, 'Тест', '2025-08-30 10:00:00', 'some explanation'),
       (13, 'test', 'Квиз "Я на friendly vibes 5"', 3, 'some desc', 2, 'Тест', '2025-08-30 10:00:00', 'some explanation'),
       (14, 'event', 'Посети ITMO FAMILY DAY 2', 3, 'some desc', 2, 'Мероприятие', '2025-08-30 10:00:00', 'some explanation'),
       (15, 'event', 'Посети ITMO FAMILY DAY 3', 3, 'some desc', 2, 'Мероприятие', '2025-08-30 10:00:00', 'some explanation'),
       (16, 'event', 'Посети ITMO FAMILY DAY 4', 3, 'some desc', 2, 'Мероприятие', '2025-08-30 10:00:00', 'some explanation');
