# MGT

Simple applications for member rewards

### Requirements
  - Nodejs >= 7.0.0
  - Mongodb >= 3.4
  - Docker >= 1.10 (optinal)

### Installation
  - Install Nodejs
  ```bash
  $ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
  $ nvm install 7
  ```

  - Install Mongodb (via Docker)
  ```bash
  $ docker pull mongo
  $ docker run --name mongo -p 27017:27017 -d mongo
  ```

  - Setup the app
  ```bash
  $ cd /path/to/your/project
  $ npm install
  $ cp .env.example .env
  $ npm start
  ```

### Testing
      ```
      $ cd /path/to/your/project
      $ npm test
      ```

### Endpoints
  - Members
    + Create new member
      * Endpoint `POST /members`
      * Request
      ```
      {
        email: <member_email|string>,
        fullname: <member_fullname|string>
      }
      ```
      * Response
      ```
      {
        id: <created_member_id|string>
      }
      ```

    + Retrieve a member
      * Endpoint `GET /members/{memberId}`
      * Response
      ```
      {
        email: <member_email|string>,
        fullname: <member_fullname|string>,
        rewards: <member_rewards|array>
      }
      ```

    + Reward to a member
      * Endpoint `PATCH /members/{memberId}/rewards`
      * Request
      ```
      {
        reward_ids: <reward_ids|array>
      }
      ```
      * Response
      ```
      {
        success: true
      }
      ```

    + Delete a member
      * Endpoint `DELETE /members/{memberId}`
      * Response
      ```
      {
        success: true
      }
      ```

  - Reward
    + Create new reward
      * Endpoint `POST /rewards`
      * Request
      ```
      {
        code: <reward_code|string>,
        description: <reward_description|string>
      }
      ```
      * Response
      ```
      {
        id: <created_reward_id|string>
      }
      ```

    + Delete a reward
      * Endpoint `DELETE /rewards/{rewardId}`
      * Response
      ```
      {
        success: true
      }
      ```

### Assumptions
  - Member just contains 2 fields: email and fullname.
  - Reward just contains 2 fields: code and description.
  - Rewards have no quantities.

### Things are important
  - Validate input data.
  - Must verify member (or creating member password).
  - Must check reward quantities before rewarding to a member.

