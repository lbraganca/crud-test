import Note from '../model/Note';
import User from '../model/User';
import db from './index';
import logger from '../logger';

(async () => {
  try {
    logger.info('Dropping database...');
    await db.drop();
    logger.info('Dropped.');
    logger.info('Creating database...');
    await db.sync();
    logger.info('Created.');
    if (process.env.NODE_ENV === 'development') {
      logger.info('Creating dummy users...');
      const users = await User.bulkCreate([
        { email: 'test.1@runtime-revolution.com', password: 'test.1' },
        { email: 'test.2@runtime-revolution.com', password: 'test.2' },
        { email: 'test.3@runtime-revolution.com', password: 'test.3' },
        { email: 'test.4@runtime-revolution.com', password: 'test.4' },
        { email: 'test.5@runtime-revolution.com', password: 'test.5' },
      ]);
      logger.info('Created.');
      logger.info('Creating dummy notes...');
      await Note.bulkCreate([
        { content: '<h1>Example 1</h1><p>Some text</p>', author: users[0].id },
        { content: '<h1>Example 2</h1><p>Some text</p>', author: users[0].id },
        { content: '<h1>Example 3</h1><p>Some text</p>', author: users[1].id },
        { content: '<h1>Example 4</h1><p>Some text</p>', author: users[1].id },
        { content: '<h1>Example 5</h1><p>Some text</p>', author: users[1].id },
        { content: '<h1>Example 6</h1><p>Some text</p>', author: users[2].id },
        { content: '<h1>Example 7</h1><p>Some text</p>', author: users[3].id },
        { content: '<h1>Example 8</h1><p>Some text</p>', author: users[3].id },
        { content: '<h1>Example 9</h1><p>Some text</p>', author: users[4].id },
        { content: '<h1>Example 10</h1><p>Some text</p>', author: users[1].id },
        { content: '<h1>Example 11</h1><p>Some text</p>', author: users[0].id },
      ]);
    }
    await db.close();
    logger.info('Done.');
  } catch (error) {
    logger.error(error);
  }
})();
