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
VALUES (0, '', 'Посетить музей оптики', 8, 'some desc', 10, 'some category', '2025-08-30 10:00:00', 'some explanation'),
       (1, '', '1st', 8, 'some desc', 1, 'some category', '2025-08-30 10:00:00', 'some explanation'),
       (2, '', '2d', 8, 'some desc', 2, 'some category', '2025-08-30 10:00:00', 'some explanation');
