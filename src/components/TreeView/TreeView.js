import React from "react";

export const TreeView = () => {
  return (
    <div>
      <ul class="tree">
        <li>Child 1</li>
        <li>Child 2</li>
        <li>
          <input class="tree-toggle" type="checkbox" id="tree-toggle-01" />
          <label class="tree-toggle-label" for="tree-toggle-01">
            Child 3
          </label>
          <ul class="subtree">
            <li>Subchild 1</li>
            <li>Subchild 2</li>
            <li>
              <input class="tree-toggle" type="checkbox" id="tree-toggle-02" />
              <label class="tree-toggle-label" for="tree-toggle-02">
                Subchild 3
              </label>
              <ul class="subtree">
                <li>SubSubChild 1</li>
                <li>SubSubChild 2</li>
              </ul>
            </li>
            <li>
              <input class="tree-toggle" type="checkbox" id="tree-toggle-03" />
              <label class="tree-toggle-label" for="tree-toggle-03">
                Subchild 4
              </label>
              <ul class="subtree">
                <li>SubSubChild 1</li>
                <li>SubSubChild 2</li>
                <li>SubSubChild 3</li>
              </ul>
            </li>
            <li>Subchild 5</li>
          </ul>
        </li>
        <li>Child 4</li>
      </ul>
    </div>
  );
};
