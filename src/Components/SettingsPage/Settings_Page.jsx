import React, { useContext } from "react";
import { SettingContext } from "../Context/Settings/Settings";
import {
  Card,
  Select,
  Switch,
  Text,
  TextInput,
} from "@mantine/core";
import "./SettingPage.scss";

export default function SettingPage() {
  const { settings, dispatch } = useContext(SettingContext);
  return (
    <>
        <Card withBorder p="xs">
          <Text>Change the Settings here</Text>

          <Switch
          color="violet"
            onChange={(e) =>
              dispatch({
                type: "CHANGE_THE_SHOW",
                payload: e.currentTarget.checked,
              })
            }
            checked={settings.showCompleted}
            label="Show Completed ToDo"
            mb="sm"
            data-testid="show-completed-switch"
          />
          <div className="select-list">
            <label>
              <span>Items per page:</span>
            </label>
            <Select
              id="items-per-page"
              onChange={(value) =>
                dispatch({ type: "CHANGE_NUMBER_OF_TASKS", payload: value })
              }
              data={[
                { label: "1", value: "1" },
                { label: "2", value: "2" },
                { label: "3", value: "3" },
                { label: "4", value: "4" },
                { label: "5", value: "5" },
                { label: "6", value: "6" },
                { label: "10", value: "10" },
              ]}
            />
          </div>
          <TextInput
            mb="sm"
            onChange={(e) =>
              dispatch({ type: "CHANGE_THE_SORT", payload: e.target.value })
            }
            placeholder={settings.sort}
            label="Sort Keyword"
            data-testid="sort-keyword-input"
          />
        </Card>

        <Card>
          <Card.Section>
            <Text m="xl">updated settings:</Text>
          </Card.Section>
          <Text m="sm">
            {settings.showCompleted ? "Show" : "Hide"} : All Completed ToDo
          </Text>
          <Text m="sm">Items Per page: {settings.itemPerPage}</Text>
          <Text m="sm">Sort Keyword: {settings.sort}</Text>
        </Card>
        </>
  );
}
