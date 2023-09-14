import React, { useContext, useState } from 'react';
import {
  Card,
  Text,
  Badge,
  Pagination,
  CloseButton,
} from '@mantine/core';
import { SettingContext } from '../Context/Settings/Settings';
import Auth from '../Auth/Auth';
import './List.css';

export default function List(props) {
    const [currentPage, setCurrentPage] = useState(1);
    const { settings } = useContext(SettingContext);
  
    let toRenderList = settings.showCompleted
      ? props.list
      : props.list.filter(task => task.completed === false);
    let startIndex = settings.itemPerPage * (currentPage - 1);
    let endIndex = startIndex + settings.itemPerPage;
    let currentPageRender = toRenderList
      ? toRenderList.slice(startIndex, endIndex)
      : [];
    let PaginationPages = Math.ceil(toRenderList.length / settings.itemPerPage);
  
    return (
      <>
        <div className="custom-list-alternative">
          {currentPageRender.map(item => (
            <Card
              className="custom-card-alternative"
              key={item.id}
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
            >
              <Card.Section className="custom-card-content-alternative">
                <div className="custom-card-header">
                  <Auth capability="delete">
                    <CloseButton
                      onClick={() => {
                        props.deleteItem(item.id);
                      }}
                      className="custom-button-alternative"
                    ></CloseButton>
                  </Auth>
                </div>
                <Text className="custom-task-text-alternative">
                  Task: {item.text}
                </Text>
                <Text className="custom-assigned-to-text-alternative">
                  Assigned to: {item.assignee}
                </Text>
                <Text className="custom-difficulty-text-alternative">
                  Difficulty: {item.difficulty}
                </Text>
                <Badge
                  className={`custom-badge-alternative ${
                    item.completed ? 'completed' : 'pending'
                  }`}
                  onClick={() => props.toggleComplete(item.id)}
                >
                  {item.completed ? 'completed' : 'pending'}
                </Badge>
              </Card.Section>
            </Card>
          ))}
        </div>
        <Pagination
          onChange={setCurrentPage}
          className="custom-pagination"
          position="center"
          styles={(theme) => ({
            control: {
              "&[data-active]": {
                backgroundImage: theme.fn.gradient({
                  from: "#56d8e4",
                  to: "#9f01ea",
                }),
                border: 0,
              },
            },
          })}
          total={PaginationPages}
        />
      </>
    );
  }
  
